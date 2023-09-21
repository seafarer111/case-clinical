

import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WebCoreDataAccessService, CaseAccountPayment, CorePaging, UserUpdateCaseAccountPaymentInput ,Payment, CaseAccount } from '@case-clinical/web/core/data-access'
import { MenuItem } from '@case-clinical/web/ui/dropdown'
import { StackedListItem } from '@case-clinical/web/ui/stacked-list'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { map, switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators'
import { ColumnState, SortModelItem } from '@ag-grid-community/core'
import { CaseAccountPaymentService } from '@case-clinical/web/case-account-payment/shared'
import { EMPTY } from 'rxjs'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { WebPaymentFeatureStore } from '@case-clinical/web/payment/shared'
import { WebCaseAccountFeatureStore } from '@case-clinical/web/case-account/shared'

export interface FilterState {
  [key: string]: unknown;
}

export interface CaseAccountPaymentListState {
  headerTitle?: string
  errors?: any
  searchFocused: boolean
  searchQuery?: string
paymentId?: string,caseAccountId?: string,
  sortSettings: ColumnState[]
  filterSettings: FilterState
  paging?: CorePaging
  loading?: boolean
  data?: CaseAccountPayment[]
  menuItems?: MenuItem[]
}

@Injectable()
export class WebCaseAccountPaymentListStore extends ComponentStore<CaseAccountPaymentListState> {
  constructor(
        private readonly data: WebCoreDataAccessService, 
        private readonly router: ActivatedRoute,
        private readonly caseAccountPaymentService: CaseAccountPaymentService,
        private readonly toast: WebUiToastService,
         private readonly paymentStore: WebPaymentFeatureStore,
 private readonly caseAccountStore: WebCaseAccountFeatureStore
    ) {
    super({
      headerTitle: 'CaseAccountPayments',
      searchFocused: false,
      searchQuery: '',
paymentId: undefined,
caseAccountId: undefined,
      sortSettings: [],
      filterSettings: {},
      paging: {
        limit: 10000,
        skip: 0,
      },
    })

    
    if(this.router.snapshot.paramMap.has("paymentId")) {
      var paymentId = this.router.snapshot.paramMap.get("paymentId")
      this.setPaymentId(paymentId)
    }


    if(this.router.snapshot.paramMap.has("caseAccountId")) {
      var caseAccountId = this.router.snapshot.paramMap.get("caseAccountId")
      this.setCaseAccountId(caseAccountId)
    }

    this.paymentStore.loadPaymentsEffect()
this.caseAccountStore.loadCaseAccountsEffect()
  }

  readonly setSkip = this.updater((state, skip: number) => ({
    ...state,
    paging: { ...state.paging, skip }
  }))

  readonly setSearchQuery = this.updater((state, searchQuery: string) => ({
    ...state,
    searchQuery
  }))

  readonly setSearchBarInFocus = this.updater((state, searchFocused: boolean) => ({
    ...state,
    searchFocused
  }))


            readonly setPaymentId = this.updater((state, paymentId: string) => ({
                ...state,
    paymentId,
  }))


            readonly setCaseAccountId = this.updater((state, caseAccountId: string) => ({
                ...state,
    caseAccountId,
  }))


  readonly headerTitle$ = this.select((s) => s.headerTitle)
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly searchFocused$ = this.select((s) => s.searchFocused)
  readonly searchQuery$ = this.select((s) => s.searchQuery)

readonly paymentId$ = this.select((s) => s.paymentId)

readonly caseAccountId$ = this.select((s) => s.caseAccountId)

payments$ = this.paymentStore.payments$
caseAccounts$ = this.caseAccountStore.caseAccounts$
  readonly data$ = this.select((s) => s.data)

  readonly sortSettings$ = this.select((s) => s.sortSettings)
  readonly filterSettings$ = this.select((s) => s.filterSettings)

  readonly input$ = this.select(this.paging$, this.paymentId$,
this.caseAccountId$, this.searchQuery$, (paging, paymentId,
caseAccountId,searchQuery) => ({
    limit: paging.limit,
    skip: paging.skip,
    name: searchQuery,
    paymentId: paymentId,caseAccountId: caseAccountId,
    total: paging.total
  }))

readonly vm$ = this.select(
    this.paging$,
    this.errors$,
    this.loading$,
    this.searchFocused$,
    this.searchQuery$,
    this.paymentId$,
this.caseAccountId$,
    this.data$,
    this.payments$,
this.caseAccounts$,
    (paging, errors, loading, searchFocused, searchQuery, paymentId,
caseAccountId, data ,payments,caseAccounts) => ({
      paging,
      errors,
      loading,
      searchFocused,
      searchQuery,
      paymentId,
caseAccountId,
      data,
      payments,caseAccounts
    }),
  )

    addCaseAccountPayments = this.updater((state, caseAccountPayments: any[]) => ({...state, data: state.data.concat(caseAccountPayments) }))
    updateCaseAccountPayments = this.updater((state, caseAccountPayments: any[]) => {
        return {
            ...state,
            data: state.data.map((caseAccountPayment) => {
            const updated = caseAccountPayments.find((el) => el.id === caseAccountPayment.id);
            return updated ? updated : caseAccountPayment;
            })
        }
    })

  validateImportData(excelData: any[]) {
    return this.vm$.pipe(
      switchMap((vm) => {
        const payments = vm.payments;
const caseAccounts = vm.caseAccounts;
        return this.caseAccountPaymentService.validateCaseAccountPaymentExcelData(excelData,payments,caseAccounts);
      })
    )
  }


  readonly loadCaseAccountPaymentsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userCaseAccountPayments({input}).pipe(
          tapResponse(
            (res) =>
              this.patchState({
                paging: {limit: input.limit, skip: input.skip, total: res.data.count.total},
                data: res.data.items,
                errors: res.errors,
                loading: false,
              }),
            (errors: any) =>
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )

readonly importExcelEffect = this.effect<UserUpdateCaseAccountPaymentInput[]>(($data) =>
    $data.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((data) => this.caseAccountPaymentService.importCaseAccountPayments(data).pipe(
        catchError(error => {
          console.log(error)
          this.toast.error(error.Message ?? 'Failed to save', {duration: 3000 })
          return EMPTY;
        }),
        tap(
          (updateResult) => {
            const created = JSON.parse(updateResult.created);
            const updated = JSON.parse(updateResult.updated);
            const failed = JSON.parse(updateResult.failed);
            const total = created.length + updated.length + failed.length;

            this.addCaseAccountPayments(created);
            this.updateCaseAccountPayments(updated);

            this.toast.success(`${created.length} created, ${updated.length} updated, ${failed.length} failed of total ${total}`, { duration: 3000 })
          }
        )
      ))
    )
  )
}
