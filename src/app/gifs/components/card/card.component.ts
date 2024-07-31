import { The480_WStill } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styles:[
    `
    #card-container{
      background: #33004A;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      height: 330px;

    }

    `
  ]
})
export class CardComponent implements OnInit{

  @Input()
  public gif!:Gif;

  ngOnInit(): void {
    if(!this.gif) throw new Error('Gif property is required');
    console.log(this.gif);
  }


}
