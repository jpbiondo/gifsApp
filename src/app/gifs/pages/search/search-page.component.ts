import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'gifs-search-page',
  templateUrl: './search-page.component.html',
})
export class SearchPageComponent implements OnInit {

  public searchTerm:string = '';

  constructor(
    private gifsService:GifsService,
    private activatedRoute:ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({id})=>{
        return this.gifsService.searchTag(id);
      });
    console.log('hola');
  }

  get gifs():Gif[]{
    return this.gifsService.gifList;
  }

}
