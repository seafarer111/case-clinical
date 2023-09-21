
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UserCreateInvoiceDetailInput, WebCoreDataAccessService, InvoiceDetail, Invoice } from '@case-clinical/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap, tap, map } from 'rxjs/operators'

export interface InvoiceDetailCreateState {
  errors?: any
  loading?: boolean
  item?: InvoiceDetail,
 invoices?: Invoice[]
  searchTerm?: string
}

@Injectable()
export class WebInvoiceDetailCreateStore extends ComponentStore<InvoiceDetailCreateState> {
  constructor(private readonly data: WebCoreDataAccessService, private readonly router: Router, private readonly route: ActivatedRoute ) {
    super({ loading: false })
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)
  readonly invoices$ = this.select((s) => s.invoices)
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, 
this.invoices$,
    (errors, loading, item, invoices ) => ({
    errors,
    loading,
    item,
invoices
  }),
{debounce: true})



  readonly filterInvoices = (term) => 
        this.data.userInvoices({input: { name: term}}).pipe(
          tapResponse(
            (res: any) => {
              let invoices = res.data.items;
              return invoices
            },
            (errors: any) =>
              this.patchState({
                errors: errors.graphQLErrors ? errors.graphQLErrors : errors,
              }),
          ),
        map(result => {
          return result.data.items;
        })
  )


    

  readonly createInvoiceDetailEffect = this.effect<UserCreateInvoiceDetailInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
        this.data.userCreateInvoiceDetail({ input }).pipe(
          tapResponse(
            (res) => {
              this.patchState({ item: res.data.created, errors: res.errors, loading: false })
              return this.router.navigate(['..', res.data?.created?.id], {relativeTo: this.route})
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
