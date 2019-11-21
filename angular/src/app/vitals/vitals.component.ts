import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {

  onepatient: any;
  openform: boolean;
  editpatient: any;
  errors: any;
  id: any;
  info: any;
  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    this.showEditForm(this.id)
    this.getInfo(this.id)
    this.openform = false;
    this.editpatient = { name: "", vitals: [] };
    this.info = { name: "", vitals: [] };
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

  showEditForm(id) {
    console.log("Edit", this.id)
    this.openform = !this.openform;

    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      console.log("One Task!!", data);
      this.editpatient = data['result'];

      console.log("One Patient ", this.editpatient);
    });
  }
  onEdit() {
    // edit_task.showEditForm = false;
    let observable = this._httpService.editpatient(this.editpatient);
    observable.subscribe(data => {
      console.log('Edit ', data);
      if (data['msg'] != "Error") {
        this.editpatient = { name: "", vitals: [] };
        this.errors = { name: "", vitals: [] };
        this.openform = false;
        this._router.navigate(['/vitals-home/' + this.id]);

      }
      else {
        this.errors.name = data['msg'] + " Name is Require";
        console.log(this.errors.name);
      }

    });
  }
}
