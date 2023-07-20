import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SecondPageService {

  constructor(
    private _http: HttpClient
  ) { }

  getOS() {

    console.log(btoa("admin:1234"));
    const headers = {
      'Authorization': 'Basic ' + btoa("admin:1234")
    };

    return this._http.get("http://10.171.81.16:8084/rest/MEUTECNICO/getschedule?cAttendant=D MG 01 090909&Cdate=20230703", { headers });
  }
}
