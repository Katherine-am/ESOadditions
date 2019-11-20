import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  new: any;
  constructor(private _httpService: HttpService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.new = {id: ''};
  }
  start(){
    let observable = this._httpService.newMaster(this.new)
    observable.subscribe((data: any) => {
      console.log("We made something", data.result)
      this.new = data.result;
      console.log(this.new)
      this.router.navigate(['/incident-home/'+this.new._id]);
    })
  }
}
