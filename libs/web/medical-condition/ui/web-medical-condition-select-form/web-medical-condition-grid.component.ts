

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebMedicalConditionFeatureStore } from '@case-clinical/web/medical-condition/shared'
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
      <ui-medical-condition-form
        class="flex-grow flex flex-col"
        [formName]="'medicalCondition_edit'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [medicalCondition]="context.value"
      >
      </ui-medical-condition-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-medical-condition-form
        class="flex-grow flex flex-col"
        [formName]="'medicalCondition_create'"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [medicalCondition]="{}"
      >
      </ui-medical-condition-form>
    </ng-template>


    <ng-template #listTemplate let-context="data">
      <ui-medical-condition-select-table-view
        [autoHeight]="true"
        class="w-full h-full bg-white"
        [medicalConditions]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref?.close()"
      >
      </ui-medical-condition-select-table-view>
    </ng-template>
  `,
})
export class WebMedicalConditionGridComponent extends UiFormGridBaseFieldType {
  formControl!: FormControl

  constructor() {
    super()
  }
}
