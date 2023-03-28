import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular';
  x:number;
  
  constructor(){
    this.title = "Eurofins"
    this.x = 100.98
  }
}
