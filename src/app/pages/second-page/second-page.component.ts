import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { SecondPageService } from 'src/app/services/second-page/second-page.service'

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})

export class SecondPageComponent {

  public text: string = 'Texto 1234';
  public schedule:any

  constructor(
    private _secondPageService: SecondPageService
  ) { }

  clickedButton() {
    this.text = '';
    alert('texto');
  }

  ngOnInit() {
    this._secondPageService.getOS().subscribe((data: any) => {
      this.schedule = data.schedule;
    });
  }
}
