import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-flowchart',
  templateUrl: './flowchart.component.html',
  styleUrls: ['./flowchart.component.css']
})
export class FlowchartComponent implements OnInit {

  addvitals: boolean;
  onepatient: any;
  openform: boolean;
  bloodpresure: boolean;
  editpatient: any;
  errors: any;
  id: any;
  info: any;
  pulsform: any;
  respform: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    // this.showEditForm(this.id)
    this.getInfo(this.id)
    this.openform = false;
    this.bloodpresure = false;
    this.pulsform = false;
    this.respform = false;
    this.addvitals = true;
    this.editpatient = { name: "", flowchart: [] };
    this.info = { name: "", flowchart: [] };
    this.errors = { name: "", };
  }
  getInfo(id) {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      console.log("Info", data);
      this.info = data['result'];
      console.log("One info ", this.editpatient);
    });
  }
  formstoggle(openform) {
    if (this.openform === true) {
      // this.bloodpresure = !this.bloodpresure;
      this.bloodpresure = true;
      this.pulsform = false;
      this.respform = false;

    }
  }
  pulstoggle(openform) {
    if (this.openform === true) {
      this.bloodpresure = false;
      // this.pulsform = !this.pulsform;
      this.pulsform = true;
      this.respform = false;

    }
  }
  resptoggle(openform) {
    if (this.openform === true) {
      this.bloodpresure = false;
      this.pulsform = false;
      // this.respform = !this.respform;
      this.respform = true;
    }
  }

  showEditFormFlow(id) {
    console.log("Edit", this.id)
    this.addvitals = false;
    this.openform = !this.openform;
    if (this.openform === true && this.pulsform === false && this.respform === false) {

      this.bloodpresure = true;
    }
    let observable = this._httpService.getOneflow(this.id);
    observable.subscribe(data => {
      console.log("One Task!!", data);
      this.editpatient = data['result'];

      console.log("One Patient ", this.editpatient);
    });
  }
  onEditFlow() {
    let observable = this._httpService.editpatientflow(this.editpatient);
    observable.subscribe(data => {
      console.log('Edit ', data);
      if (data['msg'] != "Error") {
        this.editpatient = { name: "", flowchart: [] };
        this.errors = { name: "", flowchart: [] };
        this.openform = false;
        this.getInfo(this.id)
        this.addvitals = true;
        this._router.navigate(['/flowchart-home/' + this.id]);
      }
      else {
        this.errors.name = data['msg'] + " Name is Require";
        console.log(this.errors.name);
      }

    });
  }

}
