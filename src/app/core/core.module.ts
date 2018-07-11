// Angular imports
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

// Application imports
import { CoreRoutingModule } from './core.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedModule,
    RouterModule,

    MatGridListModule,
    MatCardModule
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    NavComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    NavComponent,
    DashboardComponent
  ]
})
export class CoreModule { }
