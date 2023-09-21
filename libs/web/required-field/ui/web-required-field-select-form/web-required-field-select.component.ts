

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebRequiredFieldFeatureStore } from '@case-clinical/web/required-field/shared'
import {RequiredField} from '@case-clinical/web/core/data-access'


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
      <ui-required-field-form
        class="flex-grow flex flex-col"
        [formName]="'requiredField_edit'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [requiredField]="requiredField"
      >
      >
      </ui-required-field-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-required-field-form
        class="flex-grow flex flex-col"
        [formName]="'requiredField_create'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [requiredField]="{}"
      >
      </ui-required-field-form>
    </ng-template>

    <ng-template #listTemplate let-context="data">
      <ui-required-field-select-table-view
        class="w-full h-full bg-white"
        [requiredFields]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref.close()"
      >
      </ui-required-field-select-table-view>
    </ng-template>
  `,
})
export class WebRequiredFieldSelectComponent extends FieldType implements OnInit {
  formControl!: FormControl
  requiredField: RequiredField

  constructor(private store: WebRequiredFieldFeatureStore) {
    super()
    this.store.loadRequiredFieldsEffect()
  }

  ngOnInit(): void {
    this.to.source = this.getItems.bind(this)
    this.to.labelProp = 'name'
    this.to.valueProp = 'id'
  }

  getItems(term) {
    return this.store.requiredFields$.pipe(
      switchMap((requiredFields) => {
        return of(requiredFields)
      }),
    )
  }
}

