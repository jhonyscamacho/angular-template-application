import { FlexLayoutModule } from '@angular/flex-layout';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SignupComponent } from './signup.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { AuthService } from '../auth.service';
import { APP_BASE_HREF } from '@angular/common';
import { MaterialModule } from '../../material.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        // FlexLayoutModule,
        AppRoutingModule
      ],
      providers: [ AuthService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
