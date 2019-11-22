import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html',
  styleUrls: ['./narrative.component.css']
})
export class NarrativeComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,) { }
  id: any;
  onepatient: any;
  newSubNarrative: any;
  demographics: any;
  incident: any;

  ngOnInit() {
    this.demographics = []
    this.incident = []
    this.newSubNarrative = {narrative: ""}
    this._route.params.subscribe((params: Params) => {
    console.log(params['id'])
    this.id = params['id'];
    });
    this.getCurrentPatient()
    this.onepatient = { name: "", };
  }
  getCurrentPatient() {
    let observable = this._httpService.getOne(this.id);
    observable.subscribe(data => {
      console.log("One Patient!!", data);
      this.onepatient = data['result'];
      console.log("One Patient to edit ", this.onepatient);
      console.log("Narrative", this.onepatient.narrative)
      this.demographics = this.onepatient.demographics[0]
      this.incident = this.onepatient.incident[0]
    });
  }
  subjectiveNarrative(){
    let observable = this._httpService.addSubjectiveNarrative(this.id, this.newSubNarrative)
    observable.subscribe((data: any) => {
      if(data.message === 'success'){
        console.log("We added narrative to patient", data.result)
        this.newSubNarrative = {narrative: ""}
        let pat = this.getCurrentPatient()
        console.log(pat)
        // this._router.navigate(['/forms-home/'+this.id])
      }
      else {
        console.log("We have an error", data.result)
      }
    })
  }
}
