
import { Component,EventEmitter, Input, OnInit, Output, OnDestroy, SimpleChanges } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { Service } from '@case-clinical/web/core/data-access'
import { WebServiceFeatureStore } from '@case-clinical/web/service/shared'
import { Subject,takeUntil,map } from 'rxjs'

@Component({
  selector: 'ui-service-form',
  template: `
<ng-container *ngIf="vm$ | async as vm" class="absolute inset-0 flex flex-col overflow-y-hidden">
    <div class="md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800 bg-white rounded-lg shadow p-4">
      <div class="px-6 pt-6">
      <ui-formly-json-form
        [model]="service" 
        [formName]="formName"
        [showSubmitButton]="true"
        [componentStore]="store"
        (discard)="close.emit()"
        (formIsReady)="formIsReady()"
      ></ui-formly-json-form>
      </div>
    </div>
</ng-container>
  `,
})
export class WebFormsUiServiceComponent implements OnInit, OnDestroy {
  @Input() service: Service
  @Input() formName: string
  @Input() formControl: FormGroup
  @Output() send = new EventEmitter<any>()
  @Output() close = new EventEmitter()

  readonly vm$ = this.store.vm$
  private subscriber;

  constructor(
    public readonly store: WebServiceFeatureStore,
    public readonly route: ActivatedRoute,
  ) {
   }

    formIsReady() {
    }

   ngOnChanges(changes: SimpleChanges): void {

    if(changes.formName && changes.formName.currentValue && changes.formName.currentValue == 'service_create') {
      console.log(changes.formName.currentValue)
      this.store.setItem({id: null, name: ''})
      this.store.vm$.subscribe((vm) => {
      this.service = vm.item})
    } else if (changes.formName && changes.formName.currentValue && changes.formName.currentValue == 'service_edit') {
      if(changes.formControl && changes.formControl.currentValue) {
        console.log(changes.formControl.currentValue)
        this.store.loadServiceEffect(changes.formControl.currentValue.value)
        this.store.vm$.subscribe((vm) => {
        this.service = vm.item})
      }
    }
  }


  ngOnInit(): void {
    this.subscriber = this.store.actionResult$.subscribe(({done,item}) => {
      if(done) {
        this.send.emit(item);
      }
    })
  }

  ngOnDestroy(): void {
    this.subscriber?.unsubscribe();
  }

}