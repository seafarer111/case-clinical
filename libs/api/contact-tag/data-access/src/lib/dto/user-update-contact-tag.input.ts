import { Field, InputType } from '@nestjs/graphql'

import { UserUpdateContactInput } from '@case-clinical/api/contact/data-access' 


@InputType()
export class UserUpdateContactTagInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  contactId?: string


  @Field(() => UserUpdateContactInput ,{ nullable: true }) 
  contact?: UserUpdateContactInput  

}