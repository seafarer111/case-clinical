
import { Injectable } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { UserCreateCaseProgressStatusInput, WebCoreDataAccessService, CaseProgressStatus,  } from '@case-clinical/web/core/data-access'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { switchMap, tap, map } from 'rxjs/operators'
import { WebUiToastService } from '@case-clinical/web/ui/toast'
import { FormService } from '@case-clinical/web/ui/form'
import { CaseProgressStatusService } from '@case-clinical/web/case-progress-status/shared'

export interface CaseProgressStatusCreateState {
  errors?: any
  loading?: boolean
  item?: CaseProgressStatus,

  searchTerm?: string
}

@Injectable()
export class WebCaseProgressStatusCreateStore extends ComponentStore<CaseProgressStatusCreateState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService,
    private readonly formService: FormService,
    private readonly caseProgressStatusService: CaseProgressStatusService
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





    

  readonly createCaseProgressStatusEffect = this.effect<UserCreateCaseProgressStatusInput>((input$) =>
    input$.pipe(
      tap(() => this.patchState({ loading: true })),
      switchMap((input) =>
         this.caseProgressStatusService.createCaseProgressStatus({...input}).pipe(
          tapResponse(
            (caseProgressStatus: CaseProgressStatus) => {
              this.patchState({ item: caseProgressStatus, loading: false })
              return this.router.navigate(['..', caseProgressStatus?.id], {relativeTo: this.route})
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
