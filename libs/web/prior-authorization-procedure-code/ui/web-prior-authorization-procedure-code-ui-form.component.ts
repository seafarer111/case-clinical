
import { ChangeDetectorRef, Component,EventEmitter, Input, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormGroup } from '@angular/forms'
import { WebPriorAuthorizationProcedureCodeFormStore } from './web-prior-authorization-procedure-code-form.store'
import { PriorAuthorizationProcedureCode,CostCategory,Procedure,PriorAuthorizationRequest } from '@case-clinical/web/core/data-access'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { map, pluck, tap } from 'rxjs/operators'

@Component({
  selector: 'ui-prior-authorization-procedure-code-form',
  providers: [WebPriorAuthorizationProcedureCodeFormStore],
  template: `
    <div class="md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800 bg-white rounded-lg shadow p-4">
      <div class="px-6 pt-6">
        <ui-form (submitForm)="submit($any(priorAuthorizationProcedureCode))" [model]="priorAuthorizationProcedureCode ?? {}" [fields]="fields" [form]="form">
          <div
            class="-mx-6 -mb-4 mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-transparent dark:border-gray-700 text-right sm:px-6 rounded-b-lg space-x-3"
          >
            <ui-button label="Discard" variant="white" (click)="handleDiscardClick($event)"></ui-button>
            <ui-button label="Save" type="submit"></ui-button>
          </div>
        </ui-form>
      </div>
    </div>
  `,
})
export class WebFormsUiPriorAuthorizationProcedureCodeComponent
    {
  @Input() priorAuthorizationProcedureCode: PriorAuthorizationProcedureCode = {}
  @Output() send = new EventEmitter()
  form = new FormGroup({ })
  
  model: any = {}

 parentCostCategoryId: ''
parentProcedureId: ''
parentPriorAuthorizationRequestId: ''

  options = {
    formState: {
      mainModel: this.model,
    },
  }

fields = [
				WebUiFormField.fieldRow([

  WebUiFormField.selectForm(
          'cost-category',
          'costCategoryId',
        {
          defaultValues: {}, ////Set Parent Values
          createCostCategory: (event) => {
            if(event?.name) {
              this.store.addCostCategory(event)
              this.model.costCategoryId = event.id
              this.form.controls['costCategoryId'].patchValue(event.id)
              this.form.controls['costCategoryId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            }
          },
          onChange: (selected) => {
            this.store.filterCostCategories('').subscribe((values) => {
              this.model.costCategoryId = selected?.id
              this.form.controls['costCategoryId'].patchValue(selected?.id)
              this.form.controls['costCategoryId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            })
          },
          label: 'Cost Category',
          valueProp: 'id',
          labelProp: 'name',
          source: this.store.filterCostCategories,
          debounceTime: 5
        },
        {
          className: 'w-full md:w-1/2 xl:w-1/4 px-1',
          hooks: {
            onInit: async (field) => {
              this.store.filterCostCategories('').subscribe()
              this.route.params.pipe(pluck('costCategoryId')).subscribe((s) => {

              if (s != undefined || s != null) {
                this.parentCostCategoryId = s
                field.hide = true
              }
            })
          },
        }
      }
    )
,

  WebUiFormField.selectForm(
          'procedure',
          'procedureId',
        {
          defaultValues: {}, ////Set Parent Values
          createProcedure: (event) => {
            if(event?.name) {
              this.store.addProcedure(event)
              this.model.procedureId = event.id
              this.form.controls['procedureId'].patchValue(event.id)
              this.form.controls['procedureId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            }
          },
          onChange: (selected) => {
            this.store.filterProcedures('').subscribe((values) => {
              this.model.procedureId = selected?.id
              this.form.controls['procedureId'].patchValue(selected?.id)
              this.form.controls['procedureId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            })
          },
          label: 'Procedure',
          valueProp: 'id',
          labelProp: 'name',
          source: this.store.filterProcedures,
          debounceTime: 5
        },
        {
          className: 'w-full md:w-1/2 xl:w-1/4 px-1',
          hooks: {
            onInit: async (field) => {
              this.store.filterProcedures('').subscribe()
              this.route.params.pipe(pluck('procedureId')).subscribe((s) => {

              if (s != undefined || s != null) {
                this.parentProcedureId = s
                field.hide = true
              }
            })
          },
        }
      }
    )
,

  WebUiFormField.selectForm(
          'prior-authorization-request',
          'priorAuthorizationRequestId',
        {
          defaultValues: {}, ////Set Parent Values
          createPriorAuthorizationRequest: (event) => {
            if(event?.name) {
              this.store.addPriorAuthorizationRequest(event)
              this.model.priorAuthorizationRequestId = event.id
              this.form.controls['priorAuthorizationRequestId'].patchValue(event.id)
              this.form.controls['priorAuthorizationRequestId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            }
          },
          onChange: (selected) => {
            this.store.filterPriorAuthorizationRequests('').subscribe((values) => {
              this.model.priorAuthorizationRequestId = selected?.id
              this.form.controls['priorAuthorizationRequestId'].patchValue(selected?.id)
              this.form.controls['priorAuthorizationRequestId'].markAsDirty()
              this.ref.markForCheck()
              this.ref.detectChanges()
            })
          },
          label: 'Prior Authorization Request',
          valueProp: 'id',
          labelProp: 'name',
          source: this.store.filterPriorAuthorizationRequests,
          debounceTime: 5
        },
        {
          className: 'w-full md:w-1/2 xl:w-1/4 px-1',
          hooks: {
            onInit: async (field) => {
              this.store.filterPriorAuthorizationRequests('').subscribe()
              this.route.params.pipe(pluck('priorAuthorizationRequestId')).subscribe((s) => {

              if (s != undefined || s != null) {
                this.parentPriorAuthorizationRequestId = s
                field.hide = true
              }
            })
          },
        }
      }
    )
,
WebUiFormField.input('id', { label: 'Id' }, {className: 'sm:w-full md:w-1/2 lg:w-1/4  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, 
{
className: 'sm:w-full md:w-1/2 lg:w-1/4  px-1'
}),
WebUiFormField.currency('estimatedCost', { label: 'Estimated Cost' }, {className: 'sm:w-full md:w-1/2 lg:w-1/4  px-1'})				])

]

  constructor(
    private readonly store: WebPriorAuthorizationProcedureCodeFormStore,
    private readonly route: ActivatedRoute,
    private readonly ref: ChangeDetectorRef
  ) {}


  async submit({ procedureId,priorAuthorizationRequestId,name,costCategoryId,estimatedCost }) {
    
    if(this.parentCostCategoryId != ''){
      costCategoryId = this.parentCostCategoryId
    }


    if(this.parentProcedureId != ''){
      procedureId = this.parentProcedureId
    }


    if(this.parentPriorAuthorizationRequestId != ''){
      priorAuthorizationRequestId = this.parentPriorAuthorizationRequestId
    }

    await this.store.createPriorAuthorizationProcedureCodeEffect({ procedureId,priorAuthorizationRequestId,name,costCategoryId,estimatedCost })

    await this.store.item$.pipe(
      tap((item) => {
        if(item) {
          this.send.emit(item)
        }
      })
    ).subscribe()
  }

  handleDiscardClick(event) { 
     this.send.emit(event)
  }
}
