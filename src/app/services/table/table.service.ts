import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor(
    private _http: HttpClient
  ) { }

  getItems() {
    return this._http.get("https://po-sample-api.fly.dev/v1/heroes");
  }
}
