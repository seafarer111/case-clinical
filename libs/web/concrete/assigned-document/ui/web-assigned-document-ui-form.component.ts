
import { Component,EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { WebAssignedDocumentFormStore } from './web-assigned-document-form.store'
import { AssignedDocument,Template,DocumentType,User } from '@case-clinical/web/core/data-access'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { map } from 'rxjs/operators'

@Component({
  selector: 'ui-assigned-document-form',
  providers: [WebAssignedDocumentFormStore],
  template: `
    <div class="md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800 bg-white rounded-lg shadow">
                          <ui-page-header title="Assigned Document"></ui-page-header>
                         
                               <div class="px-6 pt-6">
        <ui-form (submitForm)="submit($any(assignedDocument))" [model]="assignedDocument" [fields]="fields" [form]="form">
          <div
            class="-mx-6 -mb-4 mt-4 px-4 py-3 bg-gray-50 dark:bg-gray-800 border-t border-transparent dark:border-gray-700 text-right sm:px-6 rounded-b-lg space-x-3"
          >
            <ui-button label = "Discard" variant="white" (click)="handleDiscardClick($event)"></ui-button>
            <ui-button label = "Save" type="submit"></ui-button>
          </div>
        </ui-form>
      </div>
    </div>
  `,
})
export class WebFormsUiAssignedDocumentComponent
    {
  @Input() assignedDocument: AssignedDocument = {}
  @Output() send = new EventEmitter()
  form = new FormGroup({ })
  
  model: any = {}

  options = {
    formState: {
      mainModel: this.model,
    },
  }

fields = [
				WebUiFormField.fieldRow([

  WebUiFormField.file(
      'document',
      {
        label: 'Document',
        delete: (d) => {
          this.model.document = {}
        },
      },
      {
        className: 'w-1/2  px-1',
      },
    )
,

  WebUiFormField.select(
          'templateId',
          {
            label: 'Template',
            options: [{id: 'CREATE', name: 'Create New Template'}],
            valueProp: 'id',
            labelProp: 'name',
          },
          {
            className: 'w-1/4  px-1',
            hooks: {
              onInit: async (field) => {
                await this.store.filterTemplates('').pipe(
                  map((x:Template)=> {
                  field.templateOptions.options = x
                  return x
                  })
                ).subscribe()
              },
            }, 
          },
        ),
,

  WebUiFormField.select(
          'documentTypeId',
          {
            label: 'Document Type',
            options: [{id: 'CREATE', name: 'Create New Document Type'}],
            valueProp: 'id',
            labelProp: 'name',
          },
          {
            className: 'w-1/4  px-1',
            hooks: {
              onInit: async (field) => {
                await this.store.filterDocumentTypes('').pipe(
                  map((x:DocumentType)=> {
                  field.templateOptions.options = x
                  return x
                  })
                ).subscribe()
              },
            }, 
          },
        ),
,

  WebUiFormField.select(
          'userId',
          {
            label: 'User',
            options: [{id: 'CREATE', name: 'Create New User'}],
            valueProp: 'id',
            labelProp: 'name',
          },
          {
            className: 'w-1/4  px-1',
            hooks: {
              onInit: async (field) => {
                await this.store.filterUsers('').pipe(
                  map((x:User)=> {
                  field.templateOptions.options = x
                  return x
                  })
                ).subscribe()
              },
            }, 
          },
        ),

WebUiFormField.input('id', { label: 'Id' }, {className: 'w-full  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, 
{
className: 'w-1/2 px-1'
}),
WebUiFormField.date('expirationDate', { label: 'Expiration Date' }, {className: 'w-full  px-1'}),
WebUiFormField.input('entityName', { label: 'Entity Name' }, {className: 'w-full  px-1'}),
WebUiFormField.input('entityId', { label: 'Entity Id' }, {className: 'w-full  px-1', hide: true})				])

]

  constructor(
    private readonly store: WebAssignedDocumentFormStore,
  ) {}

  submit({
name,expirationDate,entityName,entityId,documentId,templateId,documentTypeId,userId
  }) {
    this.send.emit({
name,expirationDate,entityName,entityId,documentId,templateId,documentTypeId,userId
    })
  }

handleDiscardClick(event) { }
}
