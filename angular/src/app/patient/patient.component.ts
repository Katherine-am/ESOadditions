import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  onepatient: any;
  errors: any;
  id: any;
  newDemographic: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newDemographic = {
      firstName: "",
      middleName:  "",
      lastName: "",
      SSN: 0,
      DOB: "",
      age: 0,
      weight: "",
      gender: "",
      race: "",
      ethnicity: ""
    }
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      this.id = params['id'];
    });
    this.getCurrentPatient()
  }
  getCurrentPatient() {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      console.log("One Patient!!", data);
      this.onepatient = data['result'];
      console.log("One Patient to edit ", this.onepatient);
    });
  }
  addDemographics(){
    let observable = this._httpService.addDemographics(this.id, this.newDemographic)
    observable.subscribe((data: any) => {
      if(data.message === 'success'){
        console.log("We added patient demographics", data.result)
        this.newDemographic = {
          firstName: "",
          middleName:  "",
          lastName: "",
          SSN: 0,
          DOB: "",
          age: 0,
          weight: "",
          gender: "",
          race: "",
          ethnicity: ""
        }
        let pat = this.getCurrentPatient()
        console.log(pat)
        this._router.navigate(['/vitals-home/'+this.id])
      }
      else{
        console.log("We have an error", data.result)
      }
    })
  }

}
