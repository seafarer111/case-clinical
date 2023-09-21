import { Field, InputType } from '@nestjs/graphql'



@InputType()
export class TranslationInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  languageCode?: string

  @Field({ nullable: true }) 
  translation?: string
}
