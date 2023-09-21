

import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WebCoreDataAccessService, FacilityFeeSchedule, CorePaging, UserUpdateFacilityFeeScheduleInput ,Organization, Specialty } from '@case-clinical/web/core/data-access'
import { MenuItem } from '@case-clinical/web/ui/dropdown'
import { StackedListItem } from '@case-clinical/web/ui/stacked-list'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { map, switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators'
import { ColumnState, SortModelItem } from '@ag-grid-community/core'
import { FacilityFeeScheduleService } from '@case-clinical/web/facility-fee-schedule/shared'
import { EMPTY } from 'rxjs'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { WebOrganizationFeatureStore } from '@case-clinical/web/organization/shared'
import { WebSpecialtyFeatureStore } from '@case-clinical/web/specialty/shared'

export interface FilterState {
  [key: string]: unknown;
}

export interface FacilityFeeScheduleListState {
  headerTitle?: string
  errors?: any
  searchFocused: boolean
  searchQuery?: string
organizationId?: string,specialtyId?: string,
  sortSettings: ColumnState[]
  filterSettings: FilterState
  paging?: CorePaging
  loading?: boolean
  data?: FacilityFeeSchedule[]
  menuItems?: MenuItem[]
}

@Injectable()
export class WebFacilityFeeScheduleListStore extends ComponentStore<FacilityFeeScheduleListState> {
  constructor(
        private readonly data: WebCoreDataAccessService, 
        private readonly router: ActivatedRoute,
        private readonly facilityFeeScheduleService: FacilityFeeScheduleService,
        private readonly toast: WebUiToastService,
         private readonly organizationStore: WebOrganizationFeatureStore,
 private readonly specialtyStore: WebSpecialtyFeatureStore
    ) {
    super({
      headerTitle: 'FacilityFeeSchedules',
      searchFocused: false,
      searchQuery: '',
organizationId: undefined,
specialtyId: undefined,
      sortSettings: [],
      filterSettings: {},
      paging: {
        limit: 10000,
        skip: 0,
      },
    })

    
    if(this.router.snapshot.paramMap.has("organizationId")) {
      var organizationId = this.router.snapshot.paramMap.get("organizationId")
      this.setOrganizationId(organizationId)
    }


    if(this.router.snapshot.paramMap.has("specialtyId")) {
      var specialtyId = this.router.snapshot.paramMap.get("specialtyId")
      this.setSpecialtyId(specialtyId)
    }

    this.organizationStore.loadOrganizationsEffect()
this.specialtyStore.loadSpecialtiesEffect()
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


            readonly setOrganizationId = this.updater((state, organizationId: string) => ({
                ...state,
    organizationId,
  }))


            readonly setSpecialtyId = this.updater((state, specialtyId: string) => ({
                ...state,
    specialtyId,
  }))


  readonly headerTitle$ = this.select((s) => s.headerTitle)
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly searchFocused$ = this.select((s) => s.searchFocused)
  readonly searchQuery$ = this.select((s) => s.searchQuery)

readonly organizationId$ = this.select((s) => s.organizationId)

readonly specialtyId$ = this.select((s) => s.specialtyId)

organizations$ = this.organizationStore.organizations$
specialties$ = this.specialtyStore.specialties$
  readonly data$ = this.select((s) => s.data)

  readonly sortSettings$ = this.select((s) => s.sortSettings)
  readonly filterSettings$ = this.select((s) => s.filterSettings)

  readonly input$ = this.select(this.paging$, this.organizationId$,
this.specialtyId$, this.searchQuery$, (paging, organizationId,
specialtyId,searchQuery) => ({
    limit: paging.limit,
    skip: paging.skip,
    name: searchQuery,
    organizationId: organizationId,specialtyId: specialtyId,
    total: paging.total
  }))

readonly vm$ = this.select(
    this.paging$,
    this.errors$,
    this.loading$,
    this.searchFocused$,
    this.searchQuery$,
    this.organizationId$,
this.specialtyId$,
    this.data$,
    this.organizations$,
this.specialties$,
    (paging, errors, loading, searchFocused, searchQuery, organizationId,
specialtyId, data ,organizations,specialties) => ({
      paging,
      errors,
      loading,
      searchFocused,
      searchQuery,
      organizationId,
specialtyId,
      data,
      organizations,specialties
    }),
  )

    addFacilityFeeSchedules = this.updater((state, facilityFeeSchedules: any[]) => ({...state, data: state.data.concat(facilityFeeSchedules) }))
    updateFacilityFeeSchedules = this.updater((state, facilityFeeSchedules: any[]) => {
        return {
            ...state,
            data: state.data.map((facilityFeeSchedule) => {
            const updated = facilityFeeSchedules.find((el) => el.id === facilityFeeSchedule.id);
            return updated ? updated : facilityFeeSchedule;
            })
        }
    })

  validateImportData(excelData: any[]) {
    return this.vm$.pipe(
      switchMap((vm) => {
        const organizations = vm.organizations;
const specialties = vm.specialties;
        return this.facilityFeeScheduleService.validateFacilityFeeScheduleExcelData(excelData,organizations,specialties);
      })
    )
  }


  readonly loadFacilityFeeSchedulesEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userFacilityFeeSchedules({input}).pipe(
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

readonly importExcelEffect = this.effect<UserUpdateFacilityFeeScheduleInput[]>(($data) =>
    $data.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((data) => this.facilityFeeScheduleService.importFacilityFeeSchedules(data).pipe(
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

            this.addFacilityFeeSchedules(created);
            this.updateFacilityFeeSchedules(updated);

            this.toast.success(`${created.length} created, ${updated.length} updated, ${failed.length} failed of total ${total}`, { duration: 3000 })
          }
        )
      ))
    )
  )
}

