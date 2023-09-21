
import { Component,EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { WebCalendarFormStore } from './web-calendar-form.store'
import { Calendar, } from '@case-clinical/web/core/data-access'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { map } from 'rxjs/operators'

@Component({
  selector: 'ui-calendar-form',
  providers: [WebCalendarFormStore],
  template: `
    <div class="md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800 bg-white rounded-lg shadow">
                          <ui-page-header title="Calendar"></ui-page-header>
                         
                               <div class="px-6 pt-6">
        <ui-form (submitForm)="submit($any(calendar))" [model]="calendar" [fields]="fields" [form]="form">
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
export class WebFormsUiCalendarComponent
    {
  @Input() calendar: Calendar = {}
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

WebUiFormField.input('id', { label: 'Id' }, {className: 'w-full  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, 
{
className: 'w-1/2 px-1'
}),
WebUiFormField.input('color', { label: 'Color' }, {className: 'w-full  px-1'}),
WebUiFormField.checkbox('visible', { label: 'Visible' }, { className: 'w-1/4  p-3' }),
,
				])

]

  constructor(
    private readonly store: WebCalendarFormStore,
  ) {}

  submit({
name,color,visible
  }) {
    this.send.emit({
name,color,visible
    })
  }

handleDiscardClick(event) { }
}
