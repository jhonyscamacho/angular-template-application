// Angular imports
import { NgModule } from '@angular/core';

// Application imports
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationModule } from './navigation/navigation.module';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [SharedModule],
  declarations: [ WelcomeComponent, DashboardComponent ],
  exports: [ WelcomeComponent, DashboardComponent, NavigationModule ]
})
export class CoreModule {}
