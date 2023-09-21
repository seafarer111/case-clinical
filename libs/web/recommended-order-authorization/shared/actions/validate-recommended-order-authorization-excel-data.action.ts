
import { of } from 'rxjs'
import { RecommendedOrderAuthorizationBusinessActionBase } from './recommended-order-authorization.business-action-base'
import { StringIsNotNullEmptyRange, ImportSolutionRule, ImportDuplicateRule } from '@schema-driven/rules-engine';
import { Authorization, RecommendedOrder } from '@case-clinical/shared/util/sdk'
export class ValidateRecommendedOrderAuthorizationExcelDataAction extends RecommendedOrderAuthorizationBusinessActionBase<boolean> {

   excelData: any[];
   authorizations: Authorization[]
recommendedOrders: RecommendedOrder[]

  valid = false;

  constructor(excelData: any[], authorizations: Authorization[], recommendedOrders: RecommendedOrder[]) {
    super('ValidateRecommendedOrderAuthorizationExcelDataAction')

    this.excelData = excelData;
this.authorizations = authorizations
this.recommendedOrders = recommendedOrders
  }

  preValidateAction() {
    const names = []
    this.excelData.map((datum, index) => {
      names.push(datum['name']);
      
            this.validationContext.addRule(
              new ImportSolutionRule(`authorizationName_${index}_is_valid}`, "Authorization Is Not Valid", 'authorization.name', datum['authorization'], this.authorizations, true)
            )

            this.validationContext.addRule(
              new ImportSolutionRule(`recommendedOrderName_${index}_is_valid}`, "Recommended Order Is Not Valid", 'recommendedOrder.name', datum['recommendedOrder'], this.recommendedOrders, true)
            )
    })

    // Check Duplicate Error
    this.validationContext.addRule(
      new ImportDuplicateRule('nameIsUnique', 'Name should be unique', names, true)
    )
  }

  performAction() {

  }

  finish(): void {
    super.finish();

    const unknownNamesByColumn: Record<string, Record<string, any>> = {}
    let conflictNames = []

    if(this.validationContext.hasRuleViolations()) {this.valid = false;
      this.validationContext.rules.map((rule) => {
        if(rule instanceof ImportSolutionRule) {
          if(!rule.isValid) {
            if(!unknownNamesByColumn[rule.columnName]) {
              unknownNamesByColumn[rule.columnName] = {
                options: rule.possibleValueList.map((el) => el.name),
                newNames: [ rule.newName ]
              };
            } else {
              if(!unknownNamesByColumn[rule.columnName]['newNames'].includes(rule.newName)) {
                unknownNamesByColumn[rule.columnName]['newNames'].push(rule.newName)
              }
            }
          }
        } else if(rule instanceof ImportDuplicateRule) {
          if(!rule.isValid) conflictNames = rule.conflicts;
        }
      })
    }
    else
      this.valid = true;

    this.response = of({
      valid: this.valid,
      excelData: this.excelData,
      conflictNames,
      unknownNames: unknownNamesByColumn,
     });
  }
}
