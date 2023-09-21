import { Field, InputType } from '@nestjs/graphql'

import { UserUpdateVendorInput } from '@case-clinical/api/vendor/data-access' 
import { UserUpdatePriorAuthDmeInput } from '@case-clinical/api/prior-auth-dme/data-access' 


@InputType()
export class UserUpdateDurableMedicalEquipmentInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  itemCode?: string

  @Field({ nullable: true }) 
  vendorId?: string

  @Field({ nullable: true }) 
  size?: string

  @Field({ nullable: true }) 
  brand?: string

  @Field({ nullable: true }) 
  itemURL?: string

  @Field({ nullable: true }) 
  estimatedCost?: number

  @Field(() => [UserUpdatePriorAuthDmeInput], { nullable: true }) 
  priorAuthDmes?: UserUpdatePriorAuthDmeInput[]


  @Field(() => UserUpdateVendorInput ,{ nullable: true }) 
  vendor?: UserUpdateVendorInput  

}