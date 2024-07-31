import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private gifsService: GifsService,
    private router:Router
  ){}

  searchTag(){
    const newTag = this.tagInput.nativeElement.value;

    this.router.navigate(['search',newTag]);

    this.tagInput.nativeElement.value='';
  }




}
