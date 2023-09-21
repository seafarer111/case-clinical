
import { Injectable } from '@angular/core'
import { ActivatedRoute,Router } from '@angular/router'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService,AuthorizationDiagnosisCode } from '@case-clinical/web/core/data-access'
import { pluck,switchMap, tap } from 'rxjs/operators'
import { DescriptionListItem } from '@case-clinical/web/ui/description-list'
import { WebUiToastService } from '@case-clinical/web/ui/toast'

export interface AuthorizationDiagnosisCodeDetailState {
  errors ?: any
  loading?: boolean
  item?: AuthorizationDiagnosisCode
}

@Injectable()
export class WebAuthorizationDiagnosisCodeDetailStore extends ComponentStore<AuthorizationDiagnosisCodeDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService
) {
    super({ loading: false })
    this.loadAuthorizationDiagnosisCodeEffect(route.params.pipe(pluck('authorizationDiagnosisCodeId')))
  }

  readonly errors$ = this.select((s) => s.errors)
  readonly loading$ = this.select((s) => s.loading)
  readonly item$ = this.select((s) => s.item)

readonly displayItems$ = this.select(
    this.item$,
    (item) =>
      [
{ label: 'Id', value: item?.id },
{ label: 'Name', value: item?.name },


      ] as DescriptionListItem[],
  )

readonly tabs$ = this.select(this.item$, (item) => [
    {
      label: 'Details',
      path: 'details',
      data: item,
    },
  ])
  readonly vm$ = this.select(this.errors$, this.loading$, this.item$, this.tabs$, (errors, loading, item, tabs) => ({
    errors,
    loading,
    item: { ...item },
    tabs
  }),
{debounce: true})

  readonly loadAuthorizationDiagnosisCodeEffect = this.effect<string>((authorizationDiagnosisCodeId$) =>
    authorizationDiagnosisCodeId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((authorizationDiagnosisCodeId) =>
        this.data.userAuthorizationDiagnosisCode({ authorizationDiagnosisCodeId }).pipe(
          tapResponse(
            (res) => this.patchState({ item: res.data.item, errors: res.errors, loading: false }),
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

  readonly deleteAuthorizationDiagnosisCodeEffect = this.effect<AuthorizationDiagnosisCode>(
    (authorizationDiagnosisCode$) =>
      authorizationDiagnosisCode$.pipe(
        switchMap((authorizationDiagnosisCode) =>
          this.data
            .userDeleteAuthorizationDiagnosisCode({
              authorizationDiagnosisCodeId: authorizationDiagnosisCode.id,
            })
            .pipe(
              tapResponse(
                (res) =>
                {  
                    this.toast.success("Deleted successfully!", {duration: 3000})
                    return this.router.navigate(['/queues/authorization-diagnosis-codes'])
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

