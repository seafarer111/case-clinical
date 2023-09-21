import { Field, InputType } from '@nestjs/graphql'

import { UserCreatePaymentInput } from '@case-clinical/api/payment/data-access' 


@InputType()
export class UserCreatePaymentApplicationMethodInput {

  @Field({ nullable: true }) 
  name?: string

  @Field(() => [UserCreatePaymentInput], { nullable: true }) 
  payments?: UserCreatePaymentInput[]


}
