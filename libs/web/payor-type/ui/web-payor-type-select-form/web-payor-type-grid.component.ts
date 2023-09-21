

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebPayorTypeFeatureStore } from '@case-clinical/web/payor-type/shared'
import { UiFormGridBaseFieldType } from '@case-clinical/web/ui/grid'

@Component({
  template: `
    <web-ui-grid
      [data]="data"
     [readOnly]="to.readOnly"
      [title]="to.title"
      [onSave]="onSave"
      [listTemplate]="listTemplate"
      [editTemplate]="editTemplate"
      [createTemplate]="createTemplate"
    ></web-ui-grid>

    <ng-template #editTemplate let-context="data">
      <ui-payor-type-form
        class="flex-grow flex flex-col"
        [formName]="'payorType_edit'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [payorType]="context.value"
      >
      </ui-payor-type-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-payor-type-form
        class="flex-grow flex flex-col"
        [formName]="'payorType_create'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [payorType]="{}"
      >
      </ui-payor-type-form>
    </ng-template>


    <ng-template #listTemplate let-context="data">
      <ui-payor-type-select-table-view
        [autoHeight]="true"
        class="w-full h-full bg-white"
        [payorTypes]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref?.close()"
      >
      </ui-payor-type-select-table-view>
    </ng-template>
  `,
})
export class WebPayorTypeGridComponent extends UiFormGridBaseFieldType {
  formControl!: FormControl

  constructor() {
    super()
  }
}