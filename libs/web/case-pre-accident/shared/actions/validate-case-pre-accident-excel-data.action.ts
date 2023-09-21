
import { of } from 'rxjs'
import { CasePreAccidentBusinessActionBase } from './case-pre-accident.business-action-base'
import { StringIsNotNullEmptyRange, ImportSolutionRule, ImportDuplicateRule } from '@schema-driven/rules-engine';
import { LegalCase } from '@case-clinical/shared/util/sdk'
export class ValidateCasePreAccidentExcelDataAction extends CasePreAccidentBusinessActionBase<boolean> {

   excelData: any[];
   legalCases: LegalCase[]
   legalCaseId?:string;
  valid = false;

  constructor(excelData: any[], legalCases: LegalCase[], legalCaseId?:string) {
    super('ValidateCasePreAccidentExcelDataAction')

    this.excelData = excelData;
this.legalCases = legalCases
this.legalCaseId = legalCaseId
  }

  preValidateAction() {
    const names = []
    this.excelData.map((datum, index) => {
      names.push(datum['name']);
      
            this.validationContext.addRule(
              new ImportSolutionRule(`legalCaseName_${index}_is_valid}`, "Legal Case Is Not Valid", 'legalCase.name', datum['legalCase'], this.legalCases, true)
            )
    })

    if(this.legalCaseId){
      this.excelData.map(item => {
        item['legalCaseId'] = this.legalCaseId
        return item
      })
    }

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
