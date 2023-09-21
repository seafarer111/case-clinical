
import { Component } from '@angular/core'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { Organization,Specialty } from '@case-clinical/web/core/data-access'
import { WebFeeScheduleCreateStore } from './web-fee-schedule-create.store'
import { ActivatedRoute,Router } from '@angular/router'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { map, pluck } from 'rxjs/operators'

@Component({
  templateUrl: './web-fee-schedule-create.component.html',
  providers: [WebFeeScheduleCreateStore],
})
export class WebFeeScheduleCreateComponent {
    readonly vm$ = this.store.vm$
    readonly organizations$ = this.store.organizations$
readonly specialties$ = this.store.specialties$

  model:any = {}

parentOrganizationId: ''
parentSpecialtyId: ''

  options = {
      formState: {
        mainModel: this.model,
      },
    }

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('name', { label: 'Name' }, 
{
className: 'w-full sm:w-1/2 md:w-1/4  px-1'
}),
WebUiFormField.input('code', { label: 'Code' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.input('modifier', { label: 'Modifier' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.input('description', { label: 'Description' } , {className: 'w-full sm:w-1/2 md:w-1/4  px-1'} ),
WebUiFormField.currency('medicarePhysicianNonFacilityRate', { label: 'Medicare Physician Non Facility Rate' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.currency('physicianNonFacilityFee', { label: 'Physician Non Facility Fee' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.currency('medicarePhysicianFacilityRate', { label: 'Medicare Physician Facility Rate' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.currency('physicianFacilityFee', { label: 'Physician Facility Fee' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.input('baseUnit', { label: 'Base Unit' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'}),
WebUiFormField.input('profCf', { label: 'Prof Cf' }, {className: 'w-full sm:w-1/2 md:w-1/4  px-1'})
    
  WebUiFormField.selectForm(
          'organization',
          'organizationId',
        {
          defaultValues: {}, ////Set Parent Values
          debounceTime: 5
        },
        {
          className: 'w-full md:w-1/2 xl:w-1/4 px-1',
          hooks: {
            onInit: async (field) => {
              this.route.params.pipe(pluck('organizationId')).subscribe((s) => {

              if (s != undefined || s != null) {
                this.parentOrganizationId = s
                field.hide = true
              }
            })
          },
        }
      }
    )
,

  WebUiFormField.selectForm(
          'specialty',
          'specialtyId',
        {
          defaultValues: {}, ////Set Parent Values
          debounceTime: 5
        },
        {
          className: 'w-full md:w-1/2 xl:w-1/4 px-1',
          hooks: {
            onInit: async (field) => {
              this.route.params.pipe(pluck('specialtyId')).subscribe((s) => {

              if (s != undefined || s != null) {
                this.parentSpecialtyId = s
                field.hide = true
              }
            })
          },
        }
      }
    )
				])

  ]

  constructor(
    private readonly store: WebFeeScheduleCreateStore,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  handleDiscardClick(evt) {
    evt?.preventDefault()
    this.router.navigate(['..'], { relativeTo: this.route })
  }

  createFeeSchedule(input) {

    if(this.parentOrganizationId != ''){
      input = {...input, organizationId: this.parentOrganizationId} 
    }


    if(this.parentSpecialtyId != ''){
      input = {...input, specialtyId: this.parentSpecialtyId} 
    }


    this.store.createFeeScheduleEffect(input)
  }
}
