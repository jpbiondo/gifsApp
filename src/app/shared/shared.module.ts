import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFound404PageComponent } from './pages/not-found404-page/not-found404-page.component';
import { RouterLink } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    SearchBoxComponent,
    TopbarComponent,
    FooterComponent,
    NotFound404PageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent,
    TopbarComponent,
    FooterComponent,
    NotFound404PageComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
