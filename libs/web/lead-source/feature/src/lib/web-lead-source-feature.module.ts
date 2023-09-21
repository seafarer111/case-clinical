
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebUiPageModule } from '@case-clinical/web/ui/page'
import { WebUiSidebarPageModule } from '@case-clinical/web/ui/sidebar-page'
import { WebLeadSourceFeatureComponent } from './web-lead-source-feature.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () => import('./web-lead-source-list/web-lead-source-list.module').then((m) => m.WebLeadSourceListModule),
      },
      {
        path: 'create',
        loadChildren: () => import('./web-lead-source-create/web-lead-source-create.module').then((m) => m.WebLeadSourceCreateModule),
      },
      {
        path: ':leadSourceId',
        component: WebLeadSourceFeatureComponent,
        children: [
          {
            path: 'details',
            loadChildren: () =>
              import('./web-lead-source-detail/web-lead-source-detail.module').then((m) => m.WebLeadSourceDetailModule),
          },
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'details'
          },
        ],
      },
    ]
),
    WebUiPageModule,
    WebUiSidebarPageModule,
  ],
  declarations: [WebLeadSourceFeatureComponent],
})
export class WebLeadSourceFeatureModule {}

