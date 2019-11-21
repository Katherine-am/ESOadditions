import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  new: any;
  show: boolean = false;
  title = 'ESO';
  constructor(private _httpService: HttpService, private route: Router) { }

  getId(event) {
    console.log("Getting ID from home", event)
  }
}
