
import { Injectable } from '@angular/core'
import { ActivatedRoute,Router } from '@angular/router'
import { ComponentStore,tapResponse } from '@ngrx/component-store'
import { WebCoreDataAccessService,CasePreAccident } from '@case-clinical/web/core/data-access'
import { pluck,switchMap, tap } from 'rxjs/operators'
import { DescriptionListItem } from '@case-clinical/web/ui/description-list'
import { WebUiToastService } from '@case-clinical/web/ui/toast'

export interface CasePreAccidentDetailState {
  errors ?: any
  loading?: boolean
  item?: CasePreAccident
}

@Injectable()
export class WebCasePreAccidentDetailStore extends ComponentStore<CasePreAccidentDetailState> {
  constructor(
    private readonly data: WebCoreDataAccessService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly toast: WebUiToastService
) {
    super({ loading: false })
    this.loadCasePreAccidentEffect(route.params.pipe(pluck('casePreAccidentId')))
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

{ label: 'Accident Date', value: item?.accidentDate },
{ label: 'Injuries', value: item?.injuries },
{ label: 'Symptoms', value: item?.symptoms },
{ label: 'Date Created', value: item?.dateCreated },
{ label: 'Removed', value: item?.removed },
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

  readonly loadCasePreAccidentEffect = this.effect<string>((casePreAccidentId$) =>
    casePreAccidentId$.pipe(
      tap(() => this.setState({ loading: true })),
      switchMap((casePreAccidentId) =>
        this.data.userCasePreAccident({ casePreAccidentId }).pipe(
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

  readonly deleteCasePreAccidentEffect = this.effect<CasePreAccident>(
    (casePreAccident$) =>
      casePreAccident$.pipe(
        switchMap((casePreAccident) =>
          this.data
            .userDeleteCasePreAccident({
              casePreAccidentId: casePreAccident.id,
            })
            .pipe(
              tapResponse(
                (res) =>
                {  
                    this.toast.success("Deleted successfully!", {duration: 3000})
                    return this.router.navigate(['/queues/case-pre-accidents'])
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

