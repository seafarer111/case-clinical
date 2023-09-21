

import { Injectable } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { WebCoreDataAccessService, ContactSetting, CorePaging, UserUpdateContactSettingInput ,Contact, Integration } from '@case-clinical/web/core/data-access'
import { MenuItem } from '@case-clinical/web/ui/dropdown'
import { StackedListItem } from '@case-clinical/web/ui/stacked-list'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { map, switchMap, tap, withLatestFrom, catchError } from 'rxjs/operators'
import { ColumnState, SortModelItem } from '@ag-grid-community/core'
import { ContactSettingService } from '@case-clinical/web/contact-setting/shared'
import { EMPTY } from 'rxjs'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { WebContactFeatureStore } from '@case-clinical/web/contact/shared'
import { WebIntegrationFeatureStore } from '@case-clinical/web/integration/shared'

export interface FilterState {
  [key: string]: unknown;
}

export interface ContactSettingListState {
  headerTitle?: string
  errors?: any
  searchFocused: boolean
  searchQuery?: string
contactId?: string,integrationId?: string,
  sortSettings: ColumnState[]
  filterSettings: FilterState
  paging?: CorePaging
  loading?: boolean
  data?: ContactSetting[]
  menuItems?: MenuItem[]
}

@Injectable()
export class WebContactSettingListStore extends ComponentStore<ContactSettingListState> {
  constructor(
        private readonly data: WebCoreDataAccessService, 
        private readonly router: ActivatedRoute,
        private readonly contactSettingService: ContactSettingService,
        private readonly toast: WebUiToastService,
         private readonly contactStore: WebContactFeatureStore,
 private readonly integrationStore: WebIntegrationFeatureStore
    ) {
    super({
      headerTitle: 'ContactSettings',
      searchFocused: false,
      searchQuery: '',
contactId: undefined,
integrationId: undefined,
      sortSettings: [],
      filterSettings: {},
      paging: {
        limit: 10000,
        skip: 0,
      },
    })

    
    if(this.router.snapshot.paramMap.has("contactId")) {
      var contactId = this.router.snapshot.paramMap.get("contactId")
      this.setContactId(contactId)
    }


    if(this.router.snapshot.paramMap.has("integrationId")) {
      var integrationId = this.router.snapshot.paramMap.get("integrationId")
      this.setIntegrationId(integrationId)
    }

    this.contactStore.loadContactsEffect()
this.integrationStore.loadIntegrationsEffect()
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


            readonly setContactId = this.updater((state, contactId: string) => ({
                ...state,
    contactId,
  }))


            readonly setIntegrationId = this.updater((state, integrationId: string) => ({
                ...state,
    integrationId,
  }))


  readonly headerTitle$ = this.select((s) => s.headerTitle)
  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly paging$ = this.select((s) => s.paging)
  readonly searchFocused$ = this.select((s) => s.searchFocused)
  readonly searchQuery$ = this.select((s) => s.searchQuery)

readonly contactId$ = this.select((s) => s.contactId)

readonly integrationId$ = this.select((s) => s.integrationId)

contacts$ = this.contactStore.contacts$
integrations$ = this.integrationStore.integrations$
  readonly data$ = this.select((s) => s.data)

  readonly sortSettings$ = this.select((s) => s.sortSettings)
  readonly filterSettings$ = this.select((s) => s.filterSettings)

  readonly input$ = this.select(this.paging$, this.contactId$,
this.integrationId$, this.searchQuery$, (paging, contactId,
integrationId,searchQuery) => ({
    limit: paging.limit,
    skip: paging.skip,
    name: searchQuery,
    contactId: contactId,integrationId: integrationId,
    total: paging.total
  }))

readonly vm$ = this.select(
    this.paging$,
    this.errors$,
    this.loading$,
    this.searchFocused$,
    this.searchQuery$,
    this.contactId$,
this.integrationId$,
    this.data$,
    this.contacts$,
this.integrations$,
    (paging, errors, loading, searchFocused, searchQuery, contactId,
integrationId, data ,contacts,integrations) => ({
      paging,
      errors,
      loading,
      searchFocused,
      searchQuery,
      contactId,
integrationId,
      data,
      contacts,integrations
    }),
  )

    addContactSettings = this.updater((state, contactSettings: any[]) => ({...state, data: state.data.concat(contactSettings) }))
    updateContactSettings = this.updater((state, contactSettings: any[]) => {
        return {
            ...state,
            data: state.data.map((contactSetting) => {
            const updated = contactSettings.find((el) => el.id === contactSetting.id);
            return updated ? updated : contactSetting;
            })
        }
    })

  validateImportData(excelData: any[]) {
    return this.vm$.pipe(
      switchMap((vm) => {
        const contacts = vm.contacts;
const integrations = vm.integrations;
        return this.contactSettingService.validateContactSettingExcelData(excelData,contacts,integrations);
      })
    )
  }


  readonly loadContactSettingsEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userContactSettings({input}).pipe(
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

readonly importExcelEffect = this.effect<UserUpdateContactSettingInput[]>(($data) =>
    $data.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((data) => this.contactSettingService.importContactSettings(data).pipe(
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

            this.addContactSettings(created);
            this.updateContactSettings(updated);

            this.toast.success(`${created.length} created, ${updated.length} updated, ${failed.length} failed of total ${total}`, { duration: 3000 })
          }
        )
      ))
    )
  )
}

