
import { Injectable } from '@angular/core'
import { WebCoreDataAccessService, PaymentApplicationMethod, UserCreatePaymentApplicationMethodInput,  } from '@case-clinical/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap, tap, map } from 'rxjs/operators'

export interface PaymentApplicationMethodFormState {
  errors?: any
  loading?: boolean
  item?: PaymentApplicationMethod,

  searchTerm?: string
}

@Injectable()
export class WebPaymentApplicationMethodFormStore extends ComponentStore<PaymentApplicationMethodFormState> {
  constructor(private readonly data: WebCoreDataAccessService) {
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





  readonly createPaymentApplicationMethodEffect = this.effect<UserCreatePaymentApplicationMethodInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.userCreatePaymentApplicationMethod({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
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


}
