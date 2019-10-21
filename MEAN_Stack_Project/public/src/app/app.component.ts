import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  newForm: any;
  forms: any;
  newElement: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newForm = { title: "" },
    this.newElement = {type :""}
    this.getFormsFromService()
  }

  onFormSubmit() {
    let observable = this._httpService.addForm(this.newForm);
    observable.subscribe(data => {
      console.log("Got the information from post data", data)
      this.newForm = { title: "" }
    })
  }

  onAddElementSubmit() {
    let observable = this._httpService.addElement(this.newElement);
    observable.subscribe(data => {
      console.log("Got the information from post data", data)
      this.newElement = { type: "" }
    })
  }

  getFormsFromService() {
    let observable = this._httpService.getForms();
    observable.subscribe(data => {
      console.log("Got our Forms!", data)
      this.forms = data
      console.log(this.forms)
    });
  }




}





