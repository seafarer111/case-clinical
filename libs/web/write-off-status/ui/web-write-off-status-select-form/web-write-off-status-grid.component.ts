

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebWriteOffStatusFeatureStore } from '@case-clinical/web/write-off-status/shared'
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
      <ui-write-off-status-form
        class="flex-grow flex flex-col"
        [formName]="'writeOffStatus_edit'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [writeOffStatus]="context.value"
      >
      </ui-write-off-status-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-write-off-status-form
        class="flex-grow flex flex-col"
        [formName]="'writeOffStatus_create'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [writeOffStatus]="{}"
      >
      </ui-write-off-status-form>
    </ng-template>


    <ng-template #listTemplate let-context="data">
      <ui-write-off-status-select-table-view
        [autoHeight]="true"
        class="w-full h-full bg-white"
        [writeOffStatuses]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref?.close()"
      >
      </ui-write-off-status-select-table-view>
    </ng-template>
  `,
})
export class WebWriteOffStatusGridComponent extends UiFormGridBaseFieldType {
  formControl!: FormControl

  constructor() {
    super()
  }
}
