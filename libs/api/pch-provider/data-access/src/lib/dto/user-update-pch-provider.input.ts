import { Field, InputType } from '@nestjs/graphql'

import { UserUpdateClinicalProviderInput } from '@case-clinical/api/clinical-provider/data-access' 


@InputType()
export class UserUpdatePchProviderInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  clinicalProviderId?: string


  @Field(() => UserUpdateClinicalProviderInput ,{ nullable: true }) 
  clinicalProvider?: UserUpdateClinicalProviderInput  

}