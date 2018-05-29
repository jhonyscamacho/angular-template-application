// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Aplication imports
import { AuthGuard } from './../auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class CoreRoutingModule {}
