import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  newMaster(start) {
    return this._http.post('/api/home/new', start)
  }

  getOne(id) {
    console.log(id)
    return this._http.get(`/api/${id}`);
  }

  editpatient(editpatient) {
    return this._http.put(`/api/${editpatient._id}`, editpatient);
  }
}
