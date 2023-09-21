
import {ActivatedRoute,Router} from '@angular/router'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormService} from '@case-clinical/web/ui/form'
import {WebRecommendedOrderDiagnosisCodeFeatureStore} from '@case-clinical/web/recommended-order-diagnosis-code/shared'

@Component({templateUrl: './web-recommended-order-diagnosis-code-create.component.html',
  providers: [WebRecommendedOrderDiagnosisCodeFeatureStore],
})
export class WebRecommendedOrderDiagnosisCodeCreateComponent implements OnInit, OnDestroy {
  readonly vm$ = this.store.vm$
  private subscriber

  formData = {
    diagnosisCodes: this.store.filterDiagnosisCodes(''),
recommendedOrders: this.store.filterRecommendedOrders('')
  }

  constructor(
    private readonly store: WebRecommendedOrderDiagnosisCodeFeatureStore,
    private router: Router,
    private route: ActivatedRoute,
    public formService: FormService,
  ) {
  }

  ngOnInit(): void {
    this.subscriber = this.store.actionResult$.subscribe(({ done, item }) => {
      if(done) {
        this.router.navigate(['..', item?.id], { relativeTo: this.route })
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }

  handleDiscardClick(evt) {
    evt?.preventDefault()
    this.router.navigate(['..'], { relativeTo: this.route })
  }
}