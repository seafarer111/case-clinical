
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { EMPTY } from 'rxjs'
import { FormService } from '@case-clinical/web/ui/form'
import { Injectable } from '@angular/core'
import { VendorTypeService } from './vendor-type.service'
import { Router, ActivatedRoute } from '@angular/router'
import { switchMap, tap, withLatestFrom, map, catchError } from 'rxjs/operators'
import { UserCreateVendorTypeInput, UserUpdateVendorTypeInput, WebCoreDataAccessService, CorePaging, VendorType,  } from '@case-clinical/web/core/data-access'
import { WebUiToastService } from '@case-clinical/web/ui/toast'


export interface VendorTypeFeatureState {
  errors?: any
  loading?: boolean
  item?: VendorType
  done: boolean,
  formName?: string

  vendorTypes: VendorType[]

  searchQuery?: string
  paging?: CorePaging
}

@Injectable()
export class WebVendorTypeFeatureStore extends ComponentStore<VendorTypeFeatureState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService,
    private readonly formService: FormService,
    private readonly vendorTypeService: VendorTypeService
) {
    super({ 
      loading: false,
      vendorTypes: [],
      done: false,
      searchQuery: '',
      formName: undefined,

      paging: {
        limit: 10000,
        skip: 0,
      },
    })

    if (this.route.snapshot.paramMap.has('vendorTypeId')) {
      var vendorTypeId = this.route.snapshot.paramMap.get('vendorTypeId')
      this.setFormName('vendorType_edit')
    } else {
      this.setFormName('vendorType_create')
    }




  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly done$ = this.select((s) => s.done)
  readonly item$ = this.select((s) => s.item)
  readonly vendorTypes$ = this.select((s) => s.vendorTypes)


  readonly paging$ = this.select((s) => s.paging)
  readonly searchQuery$ = this.select((s) => s.searchQuery)
  readonly formName$ = this.select((s) => s.formName)

  readonly actionResult$ = this.select(this.item$, this.done$,
    (item, done ) => ({item,done,
    }),
    {debounce: true })


  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, this.formName$, this.vendorTypes$,

    (errors, loading, item, formName, vendorTypes,  ) => ({
    errors,
    loading,
    item,
    formName,
    vendorTypes,

            
  }),
{debounce: true})

  readonly input$ = this.select(this.paging$,  this.searchQuery$, (paging, searchQuery) => ({
    limit: paging.limit,
    skip: paging.skip,
    name: searchQuery,
    
    total: paging.total
  }))

  readonly setFormName = this.updater((state, formName: string) => ({
    ...state,
    formName,
  }))







    

  readonly setItem = this.updater((state, item: VendorType) => ({...state, item}))

  addNewVendorType = this.updater((state, vendorType: VendorType) => ({ ...state, vendorTypes: [...state.vendorTypes, vendorType] }))

  updateVendorType = this.updater((state, vendorType: VendorType) => {
    return {
      ...state,
      vendorTypes: state.vendorTypes.map((el) => {
        if (el.id === vendorType.id) {
          return vendorType
        } else {
          return el
        }
      }),
    }
  })

  addVendorTypes = this.updater((state, newVendorTypes: any[]) => ({...state, vendorTypes: state.vendorTypes.concat(newVendorTypes) }))
  updateVendorTypes = this.updater((state, updatedVendorTypes: any[]) => {
    return {
      ...state,
      vendorTypes: state.vendorTypes.map((vendorType) => {
        const updated = updatedVendorTypes.find((el) => el.id === vendorType.id);
        return updated ? updated : vendorType;
      })
    }
  })

  readonly setSearchQuery = this.updater((state, searchQuery: string) => ({
    ...state,
    searchQuery
  }))

  validateImportData(excelData: any[]) {
    return this.vm$.pipe(
      switchMap((vm) => {
        return this.vendorTypeService.validateVendorTypeExcelData(excelData);
      })
    )
  }


  readonly loadVendorTypeEffect = this.effect<string>((vendorTypeId$) =>
    vendorTypeId$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((vendorTypeId) =>
        this.data.userVendorType({ vendorTypeId }).pipe(
          tapResponse(
            (res) => {
                    this.patchState({ 
                    item: res.data.item, 
                    errors: res.errors, 
                    loading: false 
                })
            },
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



  readonly loadVendorTypesEffect = this.effect(($) =>
    $.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.input$),
      switchMap(([_, input]) =>
        this.data.userVendorTypes({input}).pipe(
          tapResponse(
            (res) =>
              this.patchState({
                paging: {limit: input.limit, skip: input.skip, total: res.data.count.total},
                vendorTypes: res.data.items,
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

  readonly createVendorTypeEffect = this.effect<UserCreateVendorTypeInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((input) =>
        this.vendorTypeService.createVendorType({...input }).pipe(
          tapResponse(
            (vendorType: VendorType) => {
              this.addNewVendorType(vendorType)
              this.toast.success('Created Successfully!');
              setTimeout(() => this.patchState({ item: vendorType, loading: false, done: true }), 300);
              setTimeout(() => this.patchState({ done: false, item: null }), 600);
            },
            (errors: any) => {
              if (errors.graphQLErrors) {
                this.toast.error(errors.graphQLErrors[0].message, { duration: 3000 })
                this.patchState({
                  loading: false,
                  errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
                })
              } else {
                this.toast.error(errors.Message)
                this.formService.setErrors(errors.Data)
              }
            }
          ),
        ),
      ),
    ),
  )

    readonly updateVendorTypeEffect = this.effect<UserUpdateVendorTypeInput>((input$) =>
        input$.pipe(
          tap(() => this.patchState({ loading: true })),
          withLatestFrom(this.item$),
          switchMap(([input, item]) =>
            this.vendorTypeService.updateVendorType(input, input.id).pipe(
              tapResponse(
                (vendorType) => {
                  this.updateVendorType(vendorType)
                  this.toast.success('Updated Successfully!')
                  setTimeout(() => this.patchState({item: vendorType, loading: false, done: true }), 300);
                  setTimeout(() => this.patchState({done: false, item: null }), 600);
                },
                (errors: any) => {
                  if (errors.graphQLErrors) {
                      this.toast.error(errors.graphQLErrors[0].message, { duration: 3000 })
                      this.patchState({
                        loading: false,
                        errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
                      })
                  } else {
                    this.toast.error(errors.Message)
                    this.formService.setErrors(errors.Data)
                  }
                }
              ),
            ),
          ),
        ),
      )
  
    readonly deleteVendorTypeEffect = this.effect(
    ($) =>
      $.pipe(
        tap(() => this.patchState({ loading: true })),
        withLatestFrom(this.item$),
        switchMap(([_, vendorType]) => {
          return this.data.userDeleteVendorType({vendorTypeId: vendorType.id})
            .pipe(
              tapResponse(
                (res) => {
                  this.toast.success("Deleted successfully!", { duration: 3000 })
                  setTimeout(() => this.patchState({ item: res.data.deleted, loading: false, done: true }), 300);
                  setTimeout(() => this.patchState({ done: false, item: null }), 600);
                },
                (errors: any) => {
                  if (errors.graphQLErrors) {
                    this.toast.error(errors.graphQLErrors[0].message, { duration: 3000 })
                    this.patchState({
                      loading: false,
                      errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
                    })
                  } else {
                    this.toast.error(errors.Message)
                    this.formService.setErrors(errors.Data)
                  }
                }),
            )}
        ),
      ),
  )

  readonly importExcelEffect = this.effect<UserUpdateVendorTypeInput[]>(($data) =>
    $data.pipe(
      tap(() => this.patchState({loading: true })),
      switchMap((data) => this.vendorTypeService.importVendorTypes(data).pipe(
        catchError(error => {
          this.toast.error(error.Message ?? 'Failed to save', { duration: 3000 })
          return EMPTY;
        }),
        tap(
          (updateResult) => {
            const created = JSON.parse(updateResult.created);
            const updated = JSON.parse(updateResult.updated);
            const failed = JSON.parse(updateResult.failed);
            const total = created.length + updated.length + failed.length;

            this.addVendorTypes(created);
            this.updateVendorTypes(updated);

            this.toast.success(`${created.length} created, ${updated.length} updated, ${failed.length} failed of total ${total}`, { duration: 3000 })
          }
        )
      ))
    )
  )

}