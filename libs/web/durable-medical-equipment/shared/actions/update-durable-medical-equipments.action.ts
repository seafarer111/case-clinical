
import {IsNotNullOrUndefined,IsNumber, StringIsValidDateString, CellIdIsValidRule } from '@schema-driven/rules-engine'
import {of} from 'rxjs'
import {DurableMedicalEquipmentBusinessActionBase} from './durable-medical-equipment.business-action-base'
import {DurableMedicalEquipmentNameIsValidRule} from '../rules/durable-medical-equipment-name-is-valid.rule';
import {switchMap} from 'rxjs';
import {UserUpdateDurableMedicalEquipmentInput, UpdateResult} from '@case-clinical/shared/util/sdk';

export class UpdateDurableMedicalEquipmentsAction extends DurableMedicalEquipmentBusinessActionBase<UpdateResult> {

    constructor(private durableMedicalEquipments: UserUpdateDurableMedicalEquipmentInput[]) {
        super('UpdateDurableMedicalEquipmentsAction')
    }

    preValidateAction()
    {
        this.validationContext.addRule(
            new IsNotNullOrUndefined(
                'Input',
                'Input should have values',
                this.durableMedicalEquipments,
                true
            )
        )
    }

    performAction()
    {
        this.response = this.businessProvider.data.userUpdateDurableMedicalEquipments({ input: { durableMedicalEquipments: this.durableMedicalEquipments} }).pipe(
                switchMap((response) => of(response.data.updated))
            )
    }
}

export class UpdateDurableMedicalEquipmentAction extends DurableMedicalEquipmentBusinessActionBase<boolean> {

    constructor(private durableMedicalEquipment: UserUpdateDurableMedicalEquipmentInput, private durableMedicalEquipmentId: string) {
        super('UpdateDurableMedicalEquipmentAction')
    }

    preValidateAction()
    {
        this.validationContext.addRule(
            new IsNotNullOrUndefined(
                'Input',
                'Input should have values',
                this.durableMedicalEquipment,
                true
            )
        ).addRule(
            new CellIdIsValidRule(
                'Id',
                'Id should be a CUID and not null',
                this.durableMedicalEquipmentId,
                true
                )
        )
    }

    performAction()
    {
        this.response = this.businessProvider.data.userUpdateDurableMedicalEquipment({durableMedicalEquipmentId: this.durableMedicalEquipmentId, input: this.durableMedicalEquipment }).pipe(
                switchMap((response) => of(response.data.updated))
            )
    }
}
