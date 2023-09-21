
import { Component,EventEmitter, Input, Output } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FormGroup } from '@angular/forms'
import { WebChatFormStore } from './web-chat-form.store'
import { Chat,User } from '@case-clinical/web/core/data-access'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { map, pluck } from 'rxjs/operators'

@Component({
  selector: 'ui-chat-form',
  providers: [WebChatFormStore],
  template: `
    <div class="md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800 bg-white rounded-lg shadow p-4">
      <div class="px-6 pt-6">
        <ui-form (submitForm)="submit($any(chat))" [model]="chat ?? {}" [fields]="fields" [form]="form">
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
export class WebFormsUiChatComponent
    {
  @Input() chat: Chat = {}
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

  WebUiFormField.select(
          'userId',
          {
            label: 'User',
            options: this.store
                .filterUsers('')
                .pipe(
                  map((x: any) => {
                    return x
                  }),
                ),
            valueProp: 'id',
            labelProp: 'name',
          },
          {
            className: 'sm:w-full md:w-1/4 px-1',
            hooks: {
              onInit: async (field) => {
                this.route.params.pipe(pluck('userId')).subscribe((s) => {
                    field.formControl.setValue(s)
                    this.model.userId = s
                    if (s != undefined || s != null) {
                        field.hide = true
                    }
                })
              },
            }, 
          },
        )
,
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-full  px-1', hide: true}),
WebUiFormField.input('name', { label: 'Name' }, 
{
className: 'w-full sm:w-1/2 md:w-1/4 px-1'
}),
WebUiFormField.number('unreadCount', { label: 'Unread Count' }, {className: 'w-full  px-1'}),
WebUiFormField.checkbox('muted', { label: 'Muted' }, { className: 'w-full sm:w-1/2 md:w-1/4 px-1' }),
WebUiFormField.input('lastMessage', { label: 'Last Message' }, {className: 'w-full  px-1'}),
WebUiFormField.input('lastMessageAt', { label: 'Last Message At' }, {className: 'w-full  px-1'}),
				])

]

  constructor(
    private readonly store: WebChatFormStore,
    private readonly route: ActivatedRoute
  ) {}

  submit({
name,userId,unreadCount,muted,lastMessage,lastMessageAt
  }) {

    this.store.createChatEffect({
      name,userId,unreadCount,muted,lastMessage,lastMessageAt
       })

    this.send.emit({
name,userId,unreadCount,muted,lastMessage,lastMessageAt
    })
  }

  handleDiscardClick(event) { 
    this.send.emit()
  }
}
