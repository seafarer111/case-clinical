

import { switchMap, of } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { FieldType } from '@ngx-formly/core'
import { FormControl } from '@angular/forms'
import { WebRolePermissionFeatureStore } from '@case-clinical/web/role-permission/shared'
import {RolePermission} from '@case-clinical/web/core/data-access'


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
      <ui-role-permission-form
        class="flex-grow flex flex-col"
        [formName]="'rolePermission_edit'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [rolePermission]="rolePermission"
      >
      >
      </ui-role-permission-form>
    </ng-template>

    <ng-template #createTemplate let-context="data">
      <ui-role-permission-form
        class="flex-grow flex flex-col"
        [formName]="'rolePermission_create'"
        [formControl]="formControl"
        class="flex-grow flex flex-col"
        (send)="context.onSave($event); context.ref.close()"
        (close)="context.ref.close()"
        [rolePermission]="{}"
      >
      </ui-role-permission-form>
    </ng-template>

    <ng-template #listTemplate let-context="data">
      <ui-role-permission-select-table-view
        class="w-full h-full bg-white"
        [rolePermissions]="context.items"
        (itemDidSelect)="context.itemDidSelect($event); context.ref.close()"
      >
      </ui-role-permission-select-table-view>
    </ng-template>
  `,
})
export class WebRolePermissionSelectComponent extends FieldType implements OnInit {
  formControl!: FormControl
  rolePermission: RolePermission

  constructor(private store: WebRolePermissionFeatureStore) {
    super()
    this.store.loadRolePermissionsEffect()
  }

  ngOnInit(): void {
    this.to.source = this.getItems.bind(this)
    this.to.labelProp = 'name'
    this.to.valueProp = 'id'
  }

  getItems(term) {
    return this.store.rolePermissions$.pipe(
      switchMap((rolePermissions) => {
        return of(rolePermissions)
      }),
    )
  }
}

