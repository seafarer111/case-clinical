

import { CommonModule } from '@angular/common'
import { FormlyModule } from '@ngx-formly/core'
import { FormlySelectModule } from '@ngx-formly/core/select'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { WebCoreFeatureModule } from '@case-clinical/web/core/feature'
import { WebDatatableUiModule } from '@case-clinical/web/datatable/ui'
import { WebPaymentFeatureStore } from '@case-clinical/web/payment/shared'
import { WebPaymentSelectComponent } from './web-payment-select.component'
import { WebPaymentSelectTableViewComponent } from './web-payment-select-table-view.component'
import { WebFormsUiPaymentComponent } from './web-payment-ui-form.component'
import { WebUiButtonModule } from '@case-clinical/web/ui/button'
import { WebUiFormModule } from '@case-clinical/web/ui/form'
import { WebUiSelectFormModule } from '@case-clinical/web/ui/select-form'
import { WebUiFormlyDesignerModule } from '@case-clinical/web/ui/formly-designer'
import { WebUiGridModule } from '@case-clinical/web/ui/grid'
import { WebPaymentGridComponent } from './web-payment-grid.component'

@NgModule({
  exports: [
        WebFormsUiPaymentComponent, 
        WebPaymentSelectTableViewComponent, 
        WebPaymentSelectComponent,
        WebPaymentGridComponent
    ],
  declarations: [
        WebFormsUiPaymentComponent, 
        WebPaymentSelectTableViewComponent, 
        WebPaymentSelectComponent,
        WebPaymentGridComponent
    ],
  imports: [
    CommonModule,
    FormlySelectModule,
    ReactiveFormsModule,
    WebCoreFeatureModule,
    WebDatatableUiModule,
    WebUiButtonModule,
    WebUiFormModule,
    WebUiGridModule,
    WebUiSelectFormModule,
    WebUiFormlyDesignerModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'payment-select',
          component: WebPaymentSelectComponent,
          wrappers: ['form-field'],
        },
        {
          name: 'payment-grid',
          component: WebPaymentGridComponent,
        }
      ],
    }),
  ],
  providers: [WebPaymentFeatureStore],
})
export class WebFormsUiPaymentSelectModule {}