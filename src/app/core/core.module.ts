// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatListModule, MatMenuModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

// Module imports
import { CoreRoutingModule } from './core.routing.module';

// Component imports
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [
    DashboardComponent,
    NavComponent
  ],
  exports: [
    DashboardComponent,
    NavComponent
  ]
})
export class CoreModule { }
