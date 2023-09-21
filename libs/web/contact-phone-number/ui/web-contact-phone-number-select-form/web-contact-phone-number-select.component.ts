

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebContactPhoneNumberFeatureStore } from '@case-clinical/web/contact-phone-number/shared'
import {ContactPhoneNumber} from '@case-clinical/web/core/data-access'


@Component({
  template: `
    <ui-select-form
      [to]="to"
      [control]="formControl"
      [upModel]="model"
      [listTemplate]="listTemplate"
      [editTemplate]="editTemplate"
      [createTemplate]="createTemplate"
      [key]="field.key"
      (selectionChanged)="formState[$event.key]=$event.value"
    ></ui-select-form>

    <ng-template #editTemplate let-context="data">
      <ui-contact-phone-number-form
        class="flex-grow flex flex-col"
        [formName]="'contactPhoneNumber_edit'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [contactPhoneNumber]="contactPhoneNumber"
      >
      >
      </ui-contact-phone-number-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-contact-phone-number-form
        class="flex-grow flex flex-col"
        [formName]="'contactPhoneNumber_create'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [contactPhoneNumber]="{}"
      >
      </ui-contact-phone-number-form>
    </ng-template>

    <ng-template #listTemplate let-context="data">
      <ui-contact-phone-number-select-table-view
        class="w-full h-full bg-white"
        [contactPhoneNumbers]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref.close()"
      >
      </ui-contact-phone-number-select-table-view>
    </ng-template>
  `,
})
export class WebContactPhoneNumberSelectComponent extends FieldType implements OnInit {
  formControl!: FormControl
  contactPhoneNumber: ContactPhoneNumber

  constructor(private store: WebContactPhoneNumberFeatureStore) {
    super()
    this.store.loadContactPhoneNumbersEffect()
  }

  ngOnInit(): void {
    this.to.source = this.getItems.bind(this)
    this.to.labelProp = 'name'
    this.to.valueProp = 'id'
  }

  getItems(term) {
    return this.store.contactPhoneNumbers$.pipe(
      switchMap((contactPhoneNumbers) => {
        return of(contactPhoneNumbers)
      }),
    )
  }
}

