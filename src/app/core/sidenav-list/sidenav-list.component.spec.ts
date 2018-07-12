// Angular imports
import { APP_BASE_HREF } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Module imports
import { AppRoutingModule } from '../../app-routing.module';

// Service imports
import { AuthService } from '../../auth/auth.service';

// Component import
import { SidenavListComponent } from './sidenav-list.component';


describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavListComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ AppRoutingModule ],
      providers: [ AuthService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
