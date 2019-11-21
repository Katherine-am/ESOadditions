import { Component } from '@angular/core';
import { HttpService } from './_services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = false;
  title = 'angular';
  constructor(private _httpService: HttpService){}
  getId(eventData){
    console.log("Getting ID from home", eventData)
  }
}
