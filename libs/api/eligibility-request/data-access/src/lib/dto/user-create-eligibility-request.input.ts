import { Field, InputType } from '@nestjs/graphql'

import { UserCreateEligibilityStatusInput } from '@case-clinical/api/eligibility-status/data-access' 


@InputType()
export class UserCreateEligibilityRequestInput {

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  providerId?: string

  @Field({ nullable: true }) 
  specialtyId?: string

  @Field({ nullable: true }) 
  locationId?: string

  @Field({ nullable: true }) 
  visitTypeId?: string

  @Field({ nullable: true }) 
  taxID?: string

  @Field({ nullable: true }) 
  dateOfBirth?: Date

  @Field({ nullable: true }) 
  memberRegistrationNumber?: string

  @Field({ nullable: true }) 
  eligibilityStatusId?: string


  @Field(() => UserCreateEligibilityStatusInput ,{ nullable: true }) 
  elegibilityStatus?: UserCreateEligibilityStatusInput  

}
