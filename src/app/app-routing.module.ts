// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Application imports
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './core/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
