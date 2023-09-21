
import { Injectable, Inject, Optional } from "@angular/core";
import { LoggingService } from "@schema-driven/logging";
import { Observable } from "rxjs";
import { ReconciliationPeriodType, UserCreateReconciliationPeriodTypeInput, UserUpdateReconciliationPeriodTypeInput } from "@case-clinical/shared/util/sdk";
import { ReconciliationPeriodTypeBusinessProviderService } from "./business/reconciliation-period-type.business-provider.service";
import { ServiceBase, ServiceContext } from "@schema-driven/foundation";

@Injectable({
  providedIn: 'root',
})
export class ReconciliationPeriodTypeService extends ServiceBase {
 constructor(
  @Inject(ReconciliationPeriodTypeBusinessProviderService)
  @Optional() serviceContext: ServiceContext,
  private businessProvider: ReconciliationPeriodTypeBusinessProviderService,
  loggingService: LoggingService
 ) {
    super("ReconciliationPeriodTypeService", loggingService, serviceContext);
 }

    createReconciliationPeriodType(input: UserCreateReconciliationPeriodTypeInput): Observable<ReconciliationPeriodType> {
        return this.businessProvider.createReconciliationPeriodType(input);
    }

    updateReconciliationPeriodType(input: UserUpdateReconciliationPeriodTypeInput, reconciliationPeriodTypeId: string): Observable<ReconciliationPeriodType> {
        return this.businessProvider.updateReconciliationPeriodType(input, reconciliationPeriodTypeId);
    }

    importReconciliationPeriodTypes(reconciliationPeriodTypes: UserUpdateReconciliationPeriodTypeInput[]): Observable<boolean> {
        return this.businessProvider.importReconciliationPeriodTypes(reconciliationPeriodTypes);
    }
}
