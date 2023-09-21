import { Field, InputType } from '@nestjs/graphql'

import { AdminCreatePatientInput } from '@case-clinical/api/patient/data-access' 


@InputType()
export class AdminCreateEthnicityInput {

  @Field({ nullable: true }) 
  name?: string

  @Field(() => [AdminCreatePatientInput], { nullable: true }) 
  patients?: AdminCreatePatientInput[]


}