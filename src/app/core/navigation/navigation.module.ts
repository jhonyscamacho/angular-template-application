// Angular imports
import { NgModule } from '@angular/core';

// Application imports
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [ SharedModule, RouterModule ],
  declarations: [HeaderComponent, SidenavListComponent ],
  exports: [ HeaderComponent, SidenavListComponent ]
})
export class NavigationModule {}
