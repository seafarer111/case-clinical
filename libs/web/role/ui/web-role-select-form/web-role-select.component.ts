

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebRoleFeatureStore } from '@case-clinical/web/role/shared'
import {Role} from '@case-clinical/web/core/data-access'


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
      <ui-role-form
        class="flex-grow flex flex-col"
        [formName]="'role_edit'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [role]="role"
      >
      >
      </ui-role-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-role-form
        class="flex-grow flex flex-col"
        [formName]="'role_create'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [role]="{}"
      >
      </ui-role-form>
    </ng-template>

    <ng-template #listTemplate let-context="data">
      <ui-role-select-table-view
        class="w-full h-full bg-white"
        [roles]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref.close()"
      >
      </ui-role-select-table-view>
    </ng-template>
  `,
})
export class WebRoleSelectComponent extends FieldType implements OnInit {
  formControl!: FormControl
  role: Role

  constructor(private store: WebRoleFeatureStore) {
    super()
    this.store.loadRolesEffect()
  }

  ngOnInit(): void {
    this.to.source = this.getItems.bind(this)
    this.to.labelProp = 'name'
    this.to.valueProp = 'id'
  }

  getItems(term) {
    return this.store.roles$.pipe(
      switchMap((roles) => {
        return of(roles)
      }),
    )
  }
}

