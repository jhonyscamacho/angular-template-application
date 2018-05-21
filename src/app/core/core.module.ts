import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ WelcomeComponent, DashboardComponent ],
  exports: [ WelcomeComponent, DashboardComponent ]
})
export class CoreModule {}
