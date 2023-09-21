
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UserUpdatePlaceOfServiceInput, WebCoreDataAccessService, PlaceOfService,  } from '@case-clinical/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap, tap, map, withLatestFrom } from 'rxjs/operators'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { FormService } from '@case-clinical/web/ui/form'
import { PlaceOfServiceService } from '@case-clinical/web/place-of-service/shared'

export interface PlaceOfServiceEditState {
  errors?: any
  loading?: boolean
  item?: PlaceOfService,

  searchTerm?: string
}

@Injectable()
export class WebPlaceOfServiceEditStore extends ComponentStore<PlaceOfServiceEditState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService,
    private readonly formService: FormService,
    private readonly placeOfServiceService: PlaceOfServiceService
) {
    super({ loading: false })
    
    this.loadPlaceOfServiceEffect(route.params.pipe(map((route) => route?.placeOfServiceId)))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)

  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, 

    (errors, loading, item,  ) => ({
    errors,
    loading,
    item,

  }),
{debounce: true})





  
  readonly loadPlaceOfServiceEffect = this.effect<string>((placeOfServiceId$) =>
     placeOfServiceId$.pipe(
      tap(() => this.setState({loading: true })),
      switchMap((placeOfServiceId) =>
        this.data.userPlaceOfService({placeOfServiceId}).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.item, errors: res.errors, loading: false })
            },
            (errors: any) =>
              this.patchState({loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        ),
      ),
    ),
  )

  readonly updatePlaceOfServiceEffect = this.effect<UserUpdatePlaceOfServiceInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      withLatestFrom(this.item$),
      switchMap(([input, item]) =>
         this.placeOfServiceService.updatePlaceOfService(input, item?.id).pipe(
          tapResponse(
            (response: any) => {
              this.toast.success('Changed Successfully')
              this.router.navigate(['..'], { relativeTo: this.route })
            },
            (errors: any) => {
              this.toast.error(errors.Message)
              this.formService.setErrors(errors.Data)
              this.patchState({
                loading: false,
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              })
            }
          ),
        ),
      ),
    ),
  )
}
