import { Field, InputType } from '@nestjs/graphql'

import { UserCreatePatientInput } from '@case-clinical/api/patient/data-access' 


@InputType()
export class UserCreateEthnicityInput {

  @Field({ nullable: true }) 
  name?: string

  @Field(() => [UserCreatePatientInput], { nullable: true }) 
  patients?: UserCreatePatientInput[]


}