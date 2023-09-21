
import {UserCreatePriorAuthGuidelineInput} from '@case-clinical/shared/util/sdk'
import {CompositeRule,IsNotNullOrUndefined} from '@schema-driven/rules-engine'
import {PriorAuthGuidelineNameIsValidRule} from './prior-auth-guideline-name-is-valid.rule'

export class CreatePriorAuthGuidelineInputIsValidRule extends CompositeRule {target: UserCreatePriorAuthGuidelineInput
  displayToUser = true
  doNotDisplayToUser = false

  constructor(name: string,message: string, target: UserCreatePriorAuthGuidelineInput, isDisplayable = false) {
    super(name, message, isDisplayable)
    this.target = target

    this.configureRules()
  }

  private configureRules() {this.rules.push(
      new IsNotNullOrUndefined(
        'NotificationIsNotNull',
        'The form message cannot be null or undefined.',
        this.target,
        this.doNotDisplayToUser,
      ),
    )
    this.rules.push(
      new PriorAuthGuidelineNameIsValidRule(
        'name',
        'The priorauthguideline name is not valid. Must be within 2 and 255 characters.',
        this.target.name,
        2,
        255,
      )
    )
  }
    }

