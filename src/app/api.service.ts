import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable()
export class ApiService {

  constructor( private http: Http) { }

  getlist() {
    return this.http.get('https://thesmartq.firebaseio.com/menu.json');
  }
}
