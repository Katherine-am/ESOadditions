import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  onepatient: any;
  openform: boolean;
  errors: any;
  id: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    this.getCurrentPatient(this.id)
    this.onepatient = { name: "", };
    this.errors = { name: "", };
  }

  getCurrentPatient(id) {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      console.log("One Patient!!", data);
      this.onepatient = data['result'];
      console.log("One Patient ", this.onepatient);
    });
  }
}
