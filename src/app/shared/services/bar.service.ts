import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class BarService {

  public isSidebarOpen:boolean = false;

  constructor() { }

  setIsSidebarOpen(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
