import { debounceTime } from 'rxjs/operators';
// Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick, discardPeriodicTasks, async, flush } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material';

// Component imports
import { NavComponent } from './nav.component';
import { Observable } from 'rxjs';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [ MatSidenavModule, BrowserAnimationsModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
  }));

  it('should compile', () => {
     fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
