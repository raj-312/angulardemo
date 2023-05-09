import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LicenseManager } from 'ag-grid-enterprise';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

LicenseManager.setLicenseKey('[TRIAL]_CompanyName=SYSTEM,LicensedApplication=Trial Support - April,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=-1,LicensedProductionInstancesCount=0,AssetReference=AG-037732,SupportServicesEnd=30_April_2023_[v2]_MTY4MjgwOTIwMDAwMA==ac53951bd0f776b7f44f66ab27d46014');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
