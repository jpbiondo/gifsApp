import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styles: [
  ],
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!:string;

  public title:string = 'No Name';


  public hasLoaded:boolean = false;



  ngOnInit(): void {
    if(!this.url) throw new Error('Url property is required.');
  }

  onLoad(): void{
    this.hasLoaded = true;
  }


}
