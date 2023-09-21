

import { Component,OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { WebProcedureOrTreatmentRequestFeatureStore } from '@case-clinical/web/procedure-or-treatment-request/shared'
import { pluck } from 'rxjs';

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-container *ngIf="vm.item">
        <ui-formly-json-form
          formName="procedureOrTreatmentRequest_overview"
          [showSubmitButton]="false"
          [componentStore]="store"
          [model]="vm.item"
        ></ui-formly-json-form>
      </ng-container>
    </ng-container>
  `,
  providers: [WebProcedureOrTreatmentRequestFeatureStore],
})
export class WebProcedureOrTreatmentRequestOverviewComponent implements OnInit, OnDestroy {
  readonly vm$ = this.store.vm$
  private subscriber

  constructor(
    private readonly store: WebProcedureOrTreatmentRequestFeatureStore,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.store.loadProcedureOrTreatmentRequestEffect(this.route.params.pipe(pluck('procedureOrTreatmentRequestId')))
    this.subscriber = this.store.actionResult$.subscribe(({ done, item }) => {
      if(done) {
        this.router.navigate(['../../../'], {relativeTo: this.route});
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteProcedureOrTreatmentRequestEffect()
    }
  }

  
  procedureOrTreatmentRequestAuthorizationAdded($event){
    console.log('from the overview in Procedure or Treatment Request, added: ',$event)
  }


  procedureOrTreatmentRequestDiagnosisCodeAdded($event){
    console.log('from the overview in Procedure or Treatment Request, added: ',$event)
  }

}

