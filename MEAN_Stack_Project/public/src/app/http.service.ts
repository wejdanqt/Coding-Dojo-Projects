import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
  }
  getForms(){
    return this._http.get('/view');
 }

 addForm(newForm){
  return this._http.post('/new/form', newForm)
}

addElement(newElement){
  return this._http.post('/new/element/:id', newElement)
}



}


