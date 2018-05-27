// Angular imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Application imports
import { CoreRoutingModule } from './core.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent
  ]
})
export class CoreModule { }
