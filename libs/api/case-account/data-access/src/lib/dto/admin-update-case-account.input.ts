import { Field, InputType } from '@nestjs/graphql'

import { AdminUpdateLegalCaseInput } from '@case-clinical/api/legal-case/data-access' 
import { AdminUpdateLocationInput } from '@case-clinical/api/location/data-access' 
import { AdminUpdateVendorInput } from '@case-clinical/api/vendor/data-access' 
import { AdminUpdateAccountStatusInput } from '@case-clinical/api/account-status/data-access' 
import { AdminUpdateProcedureTypeInput } from '@case-clinical/api/procedure-type/data-access' 
import { AdminUpdateAgreementTypeInput } from '@case-clinical/api/agreement-type/data-access' 
import { AdminUpdateClaimProcedureInput } from '@case-clinical/api/claim-procedure/data-access' 
import { AdminUpdateInvoiceDetailInput } from '@case-clinical/api/invoice-detail/data-access' 
import { AdminUpdateContractInput } from '@case-clinical/api/contract/data-access' 
import { AdminUpdatePortfolioInput } from '@case-clinical/api/portfolio/data-access' 
import { AdminUpdateProcedureVendorInput } from '@case-clinical/api/procedure-vendor/data-access' 
import { UserUpdateWriteOffInput } from '@case-clinical/api/write-off/data-access' 
import { UserUpdateCaseAccountPaymentInput } from '@case-clinical/api/case-account-payment/data-access' 
import { UserUpdateJournalEntryInput } from '@case-clinical/api/journal-entry/data-access' 


@InputType()
export class AdminUpdateCaseAccountInput {

  @Field({ nullable: true }) 
  id?: string

  @Field({ nullable: true }) 
  name?: string

  @Field({ nullable: true }) 
  legalCaseId?: string

  @Field({ nullable: true }) 
  locationId?: string

  @Field({ nullable: true }) 
  vendorId?: string

  @Field({ nullable: true }) 
  accountStatusId?: string

  @Field({ nullable: true }) 
  procedureTypeId?: string

  @Field({ nullable: true }) 
  agreementTypeId?: string

  @Field({ nullable: true }) 
  accountAgentId?: string

  @Field({ nullable: true }) 
  claimProcedureId?: string

  @Field({ nullable: true }) 
  invoiceDetailId?: string

  @Field({ nullable: true }) 
  contractId?: string

  @Field({ nullable: true }) 
  portfolioId?: string

  @Field({ nullable: true }) 
  thirdPartyFunderName?: string

  @Field({ nullable: true }) 
  originalDueDate?: Date

  @Field({ nullable: true }) 
  accountTerm?: number

  @Field({ nullable: true }) 
  serviceDate?: Date

  @Field({ nullable: true }) 
  quantity?: number

  @Field({ nullable: true }) 
  originalDebt?: number

  @Field({ nullable: true }) 
  cost?: number

  @Field({ nullable: true }) 
  balance?: number

  @Field({ nullable: true }) 
  lastBalance?: number

  @Field({ nullable: true }) 
  reduction?: number

  @Field({ nullable: true }) 
  treatmentState?: string

  @Field({ nullable: true }) 
  accountNumber?: string

  @Field({ nullable: true }) 
  servicesPerformed?: string

  @Field({ nullable: true }) 
  cptCodes?: string

  @Field({ nullable: true }) 
  treatingPhysician?: string

  @Field({ nullable: true }) 
  referringPhysician?: string

  @Field({ nullable: true }) 
  collectionsDate?: Date

  @Field({ nullable: true }) 
  deemedWriteOffDate?: Date

  @Field({ nullable: true }) 
  expensedBadDebtDate?: Date

  @Field({ nullable: true }) 
  paidDate?: Date

  @Field({ nullable: true }) 
  ghostAccount?: boolean

  @Field({ nullable: true }) 
  ghostedDate?: Date

  @Field({ nullable: true }) 
  ghostedBy?: string

  @Field({ nullable: true }) 
  unGhostedDate?: Date

  @Field({ nullable: true }) 
  unGhostedBy?: string

  @Field({ nullable: true }) 
  additionalPayment?: boolean

  @Field({ nullable: true }) 
  missingBill?: boolean

  @Field({ nullable: true }) 
  missingLien?: boolean

  @Field({ nullable: true }) 
  missingMedicalRecords?: boolean

  @Field({ nullable: true }) 
  assignedTo?: string

  @Field({ nullable: true }) 
  resubmitted?: Date

  @Field({ nullable: true }) 
  treatmentCity?: string

  @Field({ nullable: true }) 
  origination?: number

  @Field({ nullable: true }) 
  thresholdProviderRate?: number

  @Field({ nullable: true }) 
  thresholdLocationRate?: number

  @Field({ nullable: true }) 
  teamLeaderRateSource?: string

  @Field({ nullable: true }) 
  checkNumber?: string

  @Field({ nullable: true }) 
  accountDateReceived?: Date

  @Field({ nullable: true }) 
  dateApplied?: Date

  @Field({ nullable: true }) 
  amountApplied?: number

  @Field({ nullable: true }) 
  description?: string

  @Field({ nullable: true }) 
  note?: string

  @Field({ nullable: true }) 
  medicareRate?: number

  @Field({ nullable: true }) 
  providerPercentOfMedicare?: number

  @Field({ nullable: true }) 
  contractedAmount?: number

  @Field({ nullable: true }) 
  markupPercent?: number

  @Field({ nullable: true }) 
  reimbursedTotal?: number

  @Field({ nullable: true }) 
  initialRevenue?: number

  @Field({ nullable: true }) 
  factor?: number

  @Field({ nullable: true }) 
  retailBill?: number

  @Field({ nullable: true }) 
  estMargin?: number

  @Field({ nullable: true }) 
  roi?: number

  @Field({ nullable: true }) 
  attorneyPaid?: number

  @Field({ nullable: true }) 
  percentOfRetail?: number

  @Field({ nullable: true }) 
  reimbursedFromPCR?: number

  @Field({ nullable: true }) 
  ingredientCost?: number

  @Field({ nullable: true }) 
  dispensingCost?: number

  @Field({ nullable: true }) 
  administrativeCost?: number

  @Field({ nullable: true }) 
  coPay?: number

  @Field({ nullable: true }) 
  totalCost?: number

  @Field({ nullable: true }) 
  averageWholesalePrice?: number

  @Field({ nullable: true }) 
  weightedAverageCost?: number

  @Field({ nullable: true }) 
  averageSalePrice?: number

  @Field({ nullable: true }) 
  invoiceCost?: number

  @Field({ nullable: true }) 
  usualAndCustomary?: number

  @Field({ nullable: true }) 
  nationalDrugCode?: string

  @Field({ nullable: true }) 
  procedureVendorId?: string

  @Field(() => [UserUpdateWriteOffInput], { nullable: true }) 
  writeOffs?: UserUpdateWriteOffInput[]

  @Field(() => [UserUpdateCaseAccountPaymentInput], { nullable: true }) 
  caseAccountPayments?: UserUpdateCaseAccountPaymentInput[]

  @Field(() => [UserUpdateJournalEntryInput], { nullable: true }) 
  journalEntries?: UserUpdateJournalEntryInput[]


  @Field(() => AdminUpdateLegalCaseInput ,{ nullable: true }) 
  legalCase?: AdminUpdateLegalCaseInput  


  @Field(() => AdminUpdateLocationInput ,{ nullable: true }) 
  location?: AdminUpdateLocationInput  


  @Field(() => AdminUpdateVendorInput ,{ nullable: true }) 
  vendor?: AdminUpdateVendorInput  


  @Field(() => AdminUpdateAccountStatusInput ,{ nullable: true }) 
  accountStatus?: AdminUpdateAccountStatusInput  


  @Field(() => AdminUpdateProcedureTypeInput ,{ nullable: true }) 
  procedureType?: AdminUpdateProcedureTypeInput  


  @Field(() => AdminUpdateAgreementTypeInput ,{ nullable: true }) 
  agreementType?: AdminUpdateAgreementTypeInput  


  @Field(() => AdminUpdateClaimProcedureInput ,{ nullable: true }) 
  claimProcedure?: AdminUpdateClaimProcedureInput  


  @Field(() => AdminUpdateInvoiceDetailInput ,{ nullable: true }) 
  invoiceDetail?: AdminUpdateInvoiceDetailInput  


  @Field(() => AdminUpdateContractInput ,{ nullable: true }) 
  contract?: AdminUpdateContractInput  


  @Field(() => AdminUpdatePortfolioInput ,{ nullable: true }) 
  portfolio?: AdminUpdatePortfolioInput  


  @Field(() => AdminUpdateProcedureVendorInput ,{ nullable: true }) 
  procedureVendor?: AdminUpdateProcedureVendorInput  

}