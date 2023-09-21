
import { ActivatedRoute,Router } from '@angular/router'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormService } from '@case-clinical/web/ui/form'
import { WebBalanceRequestFeatureStore } from '@case-clinical/web/balance-request/shared'
import { map } from 'rxjs'

@Component({templateUrl: './web-balance-request-edit.component.html',
  providers: [WebBalanceRequestFeatureStore],
})
export class WebBalanceRequestEditComponent  implements OnInit, OnDestroy  {
  readonly vm$ = this.store.vm$
  private subscriber

  formData = {
    documents: this.store.filterDocuments(''),
legalCases: this.store.filterLegalCases('')
  }

  constructor(
    private readonly store: WebBalanceRequestFeatureStore,
    private router: Router,
    private route: ActivatedRoute,
    public formService: FormService,
  ) {
    
  }
 
    formIsReady() {
        this.store.loadBalanceRequestEffect(this.route.params.pipe(map((route) => route?.balanceRequestId)))
    }

   ngOnInit(): void {
    this.subscriber = this.store.actionResult$.subscribe(({ done, item }) => {
      if(done) {
        this.router.navigate(['..'], { relativeTo: this.route })
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