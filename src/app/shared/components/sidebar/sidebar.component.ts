import { Component, Input } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { BarService } from '../../services/bar.service';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  @Input()
  public isOpen:boolean = false;

  constructor(
    private gifsService:GifsService,
    private barService:BarService,
    private router:Router){}

  get tags(): string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string): void{
    this.router.navigate(['search',tag]);
    this.setIsOpen();
  }

  setIsOpen(): void {
    this.isOpen = !this.isOpen;
    this.barService.setIsSidebarOpen();
  }

}
