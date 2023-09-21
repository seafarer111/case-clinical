
import { Injectable, Inject, Optional } from "@angular/core";
import { LoggingService } from "@schema-driven/logging";
import { Observable } from "rxjs";
import { CostCategory, UserCreateCostCategoryInput, UserUpdateCostCategoryInput, UpdateResult,  } from "@case-clinical/shared/util/sdk";
import { CostCategoryBusinessProviderService } from "./cost-category.business-provider.service";
import { ServiceBase, ServiceContext } from "@schema-driven/foundation";

@Injectable({providedIn: 'root'})
export class CostCategoryService extends ServiceBase {
 constructor(
  @Inject(CostCategoryBusinessProviderService)
  @Optional() serviceContext: ServiceContext,
  private businessProvider: CostCategoryBusinessProviderService,
  loggingService: LoggingService
 ) {
    super("CostCategoryService", loggingService, serviceContext);
 }

    createCostCategory(input: UserCreateCostCategoryInput): Observable<CostCategory> {
        const filteredObj = Object.fromEntries(Object.entries(input).filter(([key, value]) => value !== null));
        return this.businessProvider.createCostCategory(filteredObj);
    }

    updateCostCategory(input: UserUpdateCostCategoryInput, costCategoryId: string): Observable<CostCategory> {
        return this.businessProvider.updateCostCategory(input, costCategoryId);
    }

    importCostCategories(costCategories: UserUpdateCostCategoryInput[]): Observable<UpdateResult> {
        return this.businessProvider.importCostCategories(costCategories);
    }

    validateCostCategoryExcelData(excelData: any[] ) {
      return this.businessProvider.validateCostCategoryExcelData(excelData );
    }
}
