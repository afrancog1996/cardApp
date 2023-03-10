import { Component } from '@angular/core';
import { ServiceNameService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;

  constructor(
    private service: ServiceNameService
  ) {
    this.name = '';
  }

  search(): void {

  }
}
