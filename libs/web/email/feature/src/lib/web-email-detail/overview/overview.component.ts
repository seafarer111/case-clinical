
import { Component } from '@angular/core'
import { WebEmailDetailStore } from '../web-email-detail.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <ng-template #headerControls>
        <div class="flex-none ml-auto space-x-3">
          <ui-button icon="back-arrow" variant="white" routerLink="../../../" label="Back"></ui-button>
          <ui-button icon="pencil" variant="white" routerLink="../edit" label="Edit"></ui-button>
          <ui-button icon="trash" variant="danger" (handler)="deleteItem(vm.item)" label="Delete"></ui-button>
        
        </div>
      </ng-template>

      <ng-template #headerTemplate>
        <ui-card-header [enableBackButton]="false" [controlsTemplate]="headerControls"></ui-card-header>
      </ng-template>

      <ng-template #subTitleTemplate>
        <div class="flex-none ml-auto space-x-3">
          <div *ngIf="vm.item">Put Relevant Details Here</div>
        </div>
      </ng-template>

      <ng-container *ngIf="vm.item">
        <ui-page
          [headerTitle]="vm.item?.name" 
          [controlsTemplate]="headerTemplate"
          [disableHeaderPadding]="true"
          [disableBodyPadding]="true"
        >
          <div class="flex-1 bg-white rounded-lg shadow md:px-2 lg:px-0 lg:col-span-9 dark:bg-gray-800">
            <div class="px-4 py-5 sm:p-0" [style.min-height.px]="600">
              <div class="flex flex-row flex-wrap">
                
            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Id
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.id }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Created At
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.createdAt | date}}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Updated At
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.updatedAt | date}}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Name
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.name }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Email
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.email }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Is Public
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.isPublic }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Primary
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.primary }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Verified
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.verified }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Verify Token
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.verifyToken }}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Verify Expires
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.verifyExpires | date}}
              </div>
            </div>


            <div class="flex w-full py-4 border-b border-gray-200 lg:w-1/2 sm:py-5 sm:gap-4 sm:px-6">
              <div class="w-1/2 text-sm font-bold text-gray-700">
                Owner
              </div>
              <div class="w-1/2 text-sm text-gray-900">
                {{ vm.item.owner?.name }}
              </div>
            </div>

              </div>
            </div>
          </div>
        </ui-page>
      </ng-container>
    </ng-container>
  `,
  providers: [WebEmailDetailStore],
})
export class WebEmailOverviewComponent {
  readonly vm$ = this.store.vm$

  constructor(private readonly store: WebEmailDetailStore) {}

  deleteItem(item) {
    if (confirm('Are you sure?')) {
      this.store.deleteEmailEffect(item)
    }
  }
}

