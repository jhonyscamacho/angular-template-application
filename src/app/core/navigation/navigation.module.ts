import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../../shared/shared.module';

import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [ SharedModule, RouterModule ],
  declarations: [HeaderComponent, SidenavListComponent ],
  exports: [ HeaderComponent, SidenavListComponent ]
})
export class NavigationModule {}
