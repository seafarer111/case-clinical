

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebPriorAuthorizationImplantFeatureStore } from '@case-clinical/web/prior-authorization-implant/shared'
import {PriorAuthorizationImplant} from '@case-clinical/web/core/data-access'


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
      <ui-prior-authorization-implant-form
        class="flex-grow flex flex-col"
        [formName]="'priorAuthorizationImplant_edit'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [priorAuthorizationImplant]="priorAuthorizationImplant"
      >
      >
      </ui-prior-authorization-implant-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-prior-authorization-implant-form
        class="flex-grow flex flex-col"
        [formName]="'priorAuthorizationImplant_create'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [priorAuthorizationImplant]="{}"
      >
      </ui-prior-authorization-implant-form>
    </ng-template>

    <ng-template #listTemplate let-context="data">
      <ui-prior-authorization-implant-select-table-view
        class="w-full h-full bg-white"
        [priorAuthorizationImplants]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref.close()"
      >
      </ui-prior-authorization-implant-select-table-view>
    </ng-template>
  `,
})
export class WebPriorAuthorizationImplantSelectComponent extends FieldType implements OnInit {
  formControl!: FormControl
  priorAuthorizationImplant: PriorAuthorizationImplant

  constructor(private store: WebPriorAuthorizationImplantFeatureStore) {
    super()
    this.store.loadPriorAuthorizationImplantsEffect()
  }

  ngOnInit(): void {
    this.to.source = this.getItems.bind(this)
    this.to.labelProp = 'name'
    this.to.valueProp = 'id'
  }

  getItems(term) {
    return this.store.priorAuthorizationImplants$.pipe(
      switchMap((priorAuthorizationImplants) => {
        return of(priorAuthorizationImplants)
      }),
    )
  }
}

