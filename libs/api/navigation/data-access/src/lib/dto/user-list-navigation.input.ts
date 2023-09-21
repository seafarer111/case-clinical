import { Field,InputType } from '@nestjs/graphql'
import { CorePagingInput } from '@case-clinical/api/core/data-access'

@InputType()
export class UserListNavigationInput extends CorePagingInput {
  @Field({ nullable: true }) 
  name?: string


  @Field({ nullable: true }) 
  userId?: string  


  @Field({ nullable: true }) 
  parentId?: string  



  @Field({ nullable: true }) 
  navigationId?: string  

}
