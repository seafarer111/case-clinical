import { Field, ObjectType } from '@nestjs/graphql'

import { CaseAccount } from '@case-clinical/api/case-account/data-access'


@ObjectType()
export class JournalEntry {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  createdAt?: Date

  @Field({ nullable: true }) 
  updatedAt?: Date

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  locationName?: string

  @Field({ nullable: true }) 
  fromTo?: string

  @Field({ nullable: true }) 
  frequency?: string

  @Field({ nullable: true }) 
  autoOrManual?: string

  @Field({ nullable: true }) 
  process?: string

  @Field({ nullable: true }) 
  perAccountOrAggregateJE?: string

  @Field({ nullable: true }) 
  costRate?: number

  @Field({ nullable: true }) 
  postingDate?: Date

  @Field({ nullable: true }) 
  documentDate?: Date

  @Field({ nullable: true }) 
  dueDate?: Date

  @Field({ nullable: true }) 
  amount?: number

  @Field({ nullable: true }) 
  accountType?: string

  @Field({ nullable: true }) 
  accountNumber?: string

  @Field({ nullable: true }) 
  costCenter?: string

  @Field({ nullable: true }) 
  appliesToDocumentNumber?: string

  @Field({ nullable: true }) 
  caseAccountId?: string


  @Field(() => CaseAccount, { nullable: true }) 
  caseAccount?: CaseAccount  

}