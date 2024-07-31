import { Component } from '@angular/core';
import { BarService } from './shared/services/bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'gifs-app';

  constructor(private barService:BarService){}

  onSidebarClick(): void{
    this.barService.setIsSidebarOpen();
  }

  get isSidebarOpen(): boolean {
    return this.barService.isSidebarOpen;
  }
}
