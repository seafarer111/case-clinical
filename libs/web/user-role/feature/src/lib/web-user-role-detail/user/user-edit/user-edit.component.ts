
import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { UserUpdateUserInput, Role } from '@case-clinical/web/core/data-access'
import { WebUiFormField } from '@case-clinical/web/ui/form'
import { UserEditStore } from './user-edit.store'
import { ActivatedRoute, Router } from '@angular/router'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
  templateUrl: './user-edit.component.html',
  providers: [UserEditStore],
})
export class UserEditComponent {
        readonly vm$ = this.store.vm$
        readonly form = new FormGroup({})
        readonly firms$ = this.store.firms$

  model: UserUpdateUserInput  = {}

  options = {
      formState: {
        mainModel: this.model,
      },
    }

  fields = [
    				WebUiFormField.fieldRow([
WebUiFormField.input('id', { label: 'Id' }, {className: 'w-1/4  px-1', hide: true}),
WebUiFormField.checkbox('developer', { label: 'Developer' }, { className: 'w-1/4  p-3' })				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('username', { label: 'Username' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('password', { label: 'Password' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('firstName', { label: 'First Name' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('lastName', { label: 'Last Name' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('avatarUrl', { label: 'Avatar Url' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('line1', { label: 'Line 1' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('line2', { label: 'Line 2' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('city', { label: 'City' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('state', { label: 'State' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('postalCode', { label: 'Postal Code' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('phone', { label: 'Phone' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('bio', { label: 'Bio' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('slug', { label: 'Slug' }, {className: 'w-1/4  px-1'}),
WebUiFormField.date('dateOfBirth', { label: 'Date Of Birth' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('cellPhone', { label: 'Cell Phone' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('education', { label: 'Education' }, {className: 'w-1/4  px-1'})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.input('weatherZip', { label: 'Weather Zip' }, {className: 'w-1/4  px-1'}),
WebUiFormField.input('firmId', { label: 'Firm Id' }, {className: 'w-1/4  px-1', hide: true})				])
,
				WebUiFormField.fieldRow([
WebUiFormField.grid('settings', { label: 'Settings' } ),
WebUiFormField.grid('userRoles', { label: 'User Roles' } )				])
,
				WebUiFormField.fieldRow([
WebUiFormField.grid('caseNotes', { label: 'Case Notes' } ),
WebUiFormField.grid('intakes', { label: 'Intakes' } )				])
,
				WebUiFormField.fieldRow([
WebUiFormField.grid('teamUsers', { label: 'Team Users' } ),
WebUiFormField.grid('emails', { label: 'Emails' } )				])
,
				WebUiFormField.fieldRow([
WebUiFormField.grid('userCalendars', { label: 'User Calendars' } ),
WebUiFormField.grid('taskItems', { label: 'Task Items' } )				])
,
    
    WebUiFormField.typeahead('firm', {
      label: 'Firm',
      source: this.store.filterFirms,
      compareWith: (item, selected) => {
        return item.id === selected.id
      },
      changed: (e) => {
        console.log(e)
      },
      onChange: (selected) => {
        console.log(selected)
      }},
      {
        className: 'w-1/2  px-1',
      })

  ]

  constructor(
    private readonly store: UserEditStore,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  updateUser(input: UserUpdateUserInput) {
     const { developer,username,password,firstName,lastName,avatarUrl,line1,line2,city,state,postalCode,phone,bio,slug,dateOfBirth,cellPhone,education,weatherZip, firm } = input
        
         var firmId = firm?.id     

     this.store.updateUserEffect({developer,username,password,firstName,lastName,avatarUrl,line1,line2,city,state,postalCode,phone,bio,slug,dateOfBirth,cellPhone,education,weatherZip,firmId})
  }

  handleDiscardClick(evt) {
    evt?.preventDefault()
    this.router.navigate(['..'], { relativeTo: this.route })
  }

}
