import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() new: any;
  constructor(private _httpService: HttpService, private route: Router, private router: ActivatedRoute) { }
  @Output() giveId = new EventEmitter();
  ngOnInit() {
    this.new = {id: ''};
  }
  start(){
    let observable = this._httpService.newMaster(this.new)
    observable.subscribe((data: any) => {
      console.log("We made something", data.result)
      this.new = data.result;
      console.log(this.new)
      this.giveId.emit(this.new._id);
      this.route.navigate(['/incident-home/'+this.new._id]);
    })
  }
}
