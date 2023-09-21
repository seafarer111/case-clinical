
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UserCreatePriorMedsToDateStatusInput, WebCoreDataAccessService, PriorMedsToDateStatus,  } from '@case-clinical/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap, tap, map } from 'rxjs/operators'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { FormService } from '@case-clinical/web/ui/form'
import { PriorMedsToDateStatusService } from '@case-clinical/web/prior-meds-to-date-status/shared'

export interface PriorMedsToDateStatusCreateState {
  errors?: any
  loading?: boolean
  item?: PriorMedsToDateStatus,

  searchTerm?: string
}

@Injectable()
export class WebPriorMedsToDateStatusCreateStore extends ComponentStore<PriorMedsToDateStatusCreateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService,
    private readonly formService: FormService,
    private readonly priorMedsToDateStatusService: PriorMedsToDateStatusService
) {
    super({ loading: false })
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





    

  readonly createPriorMedsToDateStatusEffect = this.effect<UserCreatePriorMedsToDateStatusInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
         this.priorMedsToDateStatusService.createPriorMedsToDateStatus({...input}).pipe(
          tapResponse(
            (priorMedsToDateStatus: PriorMedsToDateStatus) => {
              this.patchState({ item: priorMedsToDateStatus, loading: false })
              return this.router.navigate(['..', priorMedsToDateStatus?.id], {relativeTo: this.route})
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