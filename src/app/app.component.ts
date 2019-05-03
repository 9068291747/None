import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public minDate: Date = new Date ("05/07/1999");
  public maxDate: Date = new Date ("05/27/2020");
  public value: Date = new Date ("03/05/2019");
 

}
