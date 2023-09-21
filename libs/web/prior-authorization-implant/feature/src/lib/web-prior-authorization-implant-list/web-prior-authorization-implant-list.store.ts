

import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WebCoreDataAccessService, PriorAuthorizationImplant, CorePaging, UserUpdatePriorAuthorizationImplantInput ,Implant, PriorAuthorizationRequest } from '@case-clinical/web/core/data-access'
import { MenuItem } from '@case-clinical/web/ui/dropdown'
import { StackedListItem } from '@case-clinical/web/ui/stacked-list'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { map, switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators'
import { ColumnState, SortModelItem } from '@ag-grid-community/core'
import { PriorAuthorizationImplantService } from '@case-clinical/web/prior-authorization-implant/shared'
import { EMPTY } from 'rxjs'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { WebImplantFeatureStore } from '@case-clinical/web/implant/shared'
import { WebPriorAuthorizationRequestFeatureStore } from '@case-clinical/web/prior-authorization-request/shared'

export interface FilterState {
  [key: string]: unknown;
}

export interface PriorAuthorizationImplantListState {
  headerTitle?: string
  errors?: any
  searchFocused: boolean
  searchQuery?: string
implantId?: string,priorAuthorizationRequestId?: string,
  sortSettings: ColumnState[]
  filterSettings: FilterState
  paging?: CorePaging
  loading?: boolean
  data?: PriorAuthorizationImplant[]
  menuItems?: MenuItem[]
}

@Injectable()
export class WebPriorAuthorizationImplantListStore extends ComponentStore<PriorAuthorizationImplantListState> {
  constructor(
        private readonly data: WebCoreDataAccessService, 
        private readonly router: ActivatedRoute,
        private readonly priorAuthorizationImplantService: PriorAuthorizationImplantService,
        private readonly toast: WebUiToastService,
         private readonly implantStore: WebImplantFeatureStore,
 private readonly priorAuthorizationRequestStore: WebPriorAuthorizationRequestFeatureStore
    ) {
    super({
      headerTitle: 'PriorAuthorizationImplants',
      searchFocused: false,
      searchQuery: '',
implantId: undefined,
priorAuthorizationRequestId: undefined,
      sortSettings: [],
      filterSettings: {},
      paging: {
        limit: 10000,
        skip: 0,
      },
    })

    
    if(this.router.snapshot.paramMap.has("implantId")) {
      var implantId = this.router.snapshot.paramMap.get("implantId")
      this.setImplantId(implantId)
    }


    if(this.router.snapshot.paramMap.has("priorAuthorizationRequestId")) {
      var priorAuthorizationRequestId = this.router.snapshot.paramMap.get("priorAuthorizationRequestId")
      this.setPriorAuthorizationRequestId(priorAuthorizationRequestId)
    }

    this.implantStore.loadImplantsEffect()
this.priorAuthorizationRequestStore.loadPriorAuthorizationRequestsEffect()
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


            readonly setImplantId = this.updater((state, implantId: string) => ({
                ...state,
    implantId,
  }))


            readonly setPriorAuthorizationRequestId = this.updater((state, priorAuthorizationRequestId: string) => ({
                ...state,
    priorAuthorizationRequestId,
  }))


  readonly headerTitle$ = this.select((s) => s.headerTitle)
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly searchFocused$ = this.select((s) => s.searchFocused)
  readonly searchQuery$ = this.select((s) => s.searchQuery)

readonly implantId$ = this.select((s) => s.implantId)

readonly priorAuthorizationRequestId$ = this.select((s) => s.priorAuthorizationRequestId)

implants$ = this.implantStore.implants$
priorAuthorizationRequests$ = this.priorAuthorizationRequestStore.priorAuthorizationRequests$
  readonly data$ = this.select((s) => s.data)

  readonly sortSettings$ = this.select((s) => s.sortSettings)
  readonly filterSettings$ = this.select((s) => s.filterSettings)

  readonly input$ = this.select(this.paging$, this.implantId$,
this.priorAuthorizationRequestId$, this.searchQuery$, (paging, implantId,
priorAuthorizationRequestId,searchQuery) => ({
    limit: paging.limit,
    skip: paging.skip,
    name: searchQuery,
    implantId: implantId,priorAuthorizationRequestId: priorAuthorizationRequestId,
    total: paging.total
  }))

readonly vm$ = this.select(
    this.paging$,
    this.errors$,
    this.loading$,
    this.searchFocused$,
    this.searchQuery$,
    this.implantId$,
this.priorAuthorizationRequestId$,
    this.data$,
    this.implants$,
this.priorAuthorizationRequests$,
    (paging, errors, loading, searchFocused, searchQuery, implantId,
priorAuthorizationRequestId, data ,implants,priorAuthorizationRequests) => ({
      paging,
      errors,
      loading,
      searchFocused,
      searchQuery,
      implantId,
priorAuthorizationRequestId,
      data,
      implants,priorAuthorizationRequests
    }),
  )

    addPriorAuthorizationImplants = this.updater((state, priorAuthorizationImplants: any[]) => ({...state, data: state.data.concat(priorAuthorizationImplants) }))
    updatePriorAuthorizationImplants = this.updater((state, priorAuthorizationImplants: any[]) => {
        return {
            ...state,
            data: state.data.map((priorAuthorizationImplant) => {
            const updated = priorAuthorizationImplants.find((el) => el.id === priorAuthorizationImplant.id);
            return updated ? updated : priorAuthorizationImplant;
            })
        }
    })

  validateImportData(excelData: any[]) {
    return this.vm$.pipe(
      switchMap((vm) => {
        const implants = vm.implants;
const priorAuthorizationRequests = vm.priorAuthorizationRequests;
        return this.priorAuthorizationImplantService.validatePriorAuthorizationImplantExcelData(excelData,implants,priorAuthorizationRequests);
      })
    )
  }


  readonly loadPriorAuthorizationImplantsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userPriorAuthorizationImplants({input}).pipe(
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

readonly importExcelEffect = this.effect<UserUpdatePriorAuthorizationImplantInput[]>(($data) =>
    $data.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((data) => this.priorAuthorizationImplantService.importPriorAuthorizationImplants(data).pipe(
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

            this.addPriorAuthorizationImplants(created);
            this.updatePriorAuthorizationImplants(updated);

            this.toast.success(`${created.length} created, ${updated.length} updated, ${failed.length} failed of total ${total}`, { duration: 3000 })
          }
        )
      ))
    )
  )
}
