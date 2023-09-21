import { Field, InputType } from '@nestjs/graphql'

import { UserCreatePriorAuthorizationRequestInput } from '@case-clinical/api/prior-authorization-request/data-access' 


@InputType()
export class UserCreateGuidelineUsedInput {

  @Field({ nullable: true }) 
  name?: string

  @Field(() => [UserCreatePriorAuthorizationRequestInput], { nullable: true }) 
  priorAuthorizationRequests?: UserCreatePriorAuthorizationRequestInput[]


}
