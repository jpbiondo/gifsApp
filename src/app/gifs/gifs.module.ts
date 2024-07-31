import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SearchPageComponent } from './pages/search/search-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { CardTitlePipe } from './pipes/cardtitle.pipe';




@NgModule({
  declarations: [
    SearchPageComponent,
    CardListComponent,
    CardComponent,

    //Pipes
    CardTitlePipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchPageComponent,
  ]
})
export class GifsModule { }
