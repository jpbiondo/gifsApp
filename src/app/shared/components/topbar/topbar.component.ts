import { Component, EventEmitter, Output } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'shared-topbar',
  templateUrl: './topbar.component.html',
})
export class TopbarComponent {


  constructor(private router:Router){}

  @Output()
  public onSidebarClick:EventEmitter<boolean> = new EventEmitter();

  sidebarClick(): void {
    this.onSidebarClick.emit();
  }

}
