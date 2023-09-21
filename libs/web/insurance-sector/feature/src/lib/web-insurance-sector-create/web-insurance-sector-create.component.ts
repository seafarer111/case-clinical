
import {ActivatedRoute,Router} from '@angular/router'
import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormService} from '@case-clinical/web/ui/form'
import {WebInsuranceSectorFeatureStore} from '@case-clinical/web/insurance-sector/shared'

@Component({templateUrl: './web-insurance-sector-create.component.html',
  providers: [WebInsuranceSectorFeatureStore],
})
export class WebInsuranceSectorCreateComponent implements OnInit, OnDestroy {
  readonly vm$ = this.store.vm$
  private subscriber

  formData = {
    
  }

  constructor(
    private readonly store: WebInsuranceSectorFeatureStore,
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
