

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { UtilitySharedModule } from '@case-clinical/web/shared/ui'
import { WebCoreFeatureModule } from '@case-clinical/web/core/feature'
import { WebPriorMedsToDateListComponent } from './web-prior-meds-to-date-list.component'
import { WebDatatableFeatureModule } from '@case-clinical/web/datatable/feature';
@NgModule({
  declarations: [WebPriorMedsToDateListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: WebPriorMedsToDateListComponent }]),
    UtilitySharedModule,
    WebCoreFeatureModule,
    WebDatatableFeatureModule,
    
  ],
})
export class WebPriorMedsToDateListModule {}
