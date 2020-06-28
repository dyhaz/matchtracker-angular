import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PreloaderComponent } from './preloader/preloader.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [FooterComponent, NavbarComponent, PreloaderComponent, SidebarLeftComponent],
  exports: [
    PreloaderComponent,
    NavbarComponent,
    SidebarLeftComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
