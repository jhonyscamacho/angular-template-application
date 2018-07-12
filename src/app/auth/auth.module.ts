// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDatepickerModule, MatCheckboxModule } from '@angular/material';

// Application imports
import { AuthRoutingModule } from './auth.routing.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AuthRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
