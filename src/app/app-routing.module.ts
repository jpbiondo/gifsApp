import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404PageComponent } from './shared/pages/not-found404-page/not-found404-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { SearchPageComponent } from './gifs/pages/search/search-page.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePageComponent,
  },

  {
    path:'search/:id',
    component: SearchPageComponent,
  },

  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFound404PageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
