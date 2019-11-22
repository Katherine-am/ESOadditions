import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  new: any;
  showStart: boolean;
  id: any;

  title = 'ESO';
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    this.new = {id: ''}
    this.id = ""
    this.showStart = true;
  }
  // start(){
  //   let observable = this._httpService.newMaster(this.new)
  //   observable.subscribe((data: any) => {
  //     console.log("We made something", data.result)
  //     this.new = data.result;
  //     this.id = data.result[0]._id
  //     console.log("New id", this.id)
  //     console.log(this.new)
  //     this.showStart = false;
  //     this.router.navigate(['/incident-home/'+this.new._id]);
  //   })
  // }
  // getId(event) {
  //   console.log("Getting ID from home", event)
  // }
}
