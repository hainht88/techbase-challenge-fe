import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgMaterialModule } from './ng-material/ng-material.module';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ViewModule } from "../view/view.module";
import { SidenavService } from './component/sidenav/sidenav.service';
import { NcoviService } from './service/ncovi.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgMaterialModule,
    ViewModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent, 
    SidenavComponent
  ],
  providers: [
    SidenavService,
    NcoviService
  ]
})
export class SharedModule { }
