// Angular imports
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Application imports
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
