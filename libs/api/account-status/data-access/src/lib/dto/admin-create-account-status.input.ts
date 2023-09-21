import { Field, InputType } from '@nestjs/graphql'

import { AdminCreateCaseAccountInput } from '@case-clinical/api/case-account/data-access' 


@InputType()
export class AdminCreateAccountStatusInput {

  @Field({ nullable: true }) 
  name?: string

  @Field(() => [AdminCreateCaseAccountInput], { nullable: true }) 
  caseAccounts?: AdminCreateCaseAccountInput[]


}