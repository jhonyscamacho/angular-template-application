import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  imports: [SharedModule],
  declarations: [ WelcomeComponent, DashboardComponent ],
  exports: [ WelcomeComponent, DashboardComponent, NavigationModule ]
})
export class CoreModule {}
