import { Component } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

import { HttpClient } from '@angular/common/http';

import { TableService } from 'src/app/services/table/table.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent {

  constructor(
    private _tableService: TableService,
    private _http: HttpClient
  ) { }

  public columns: PoTableColumn[] = [
    { property: 'id' },
    { property: 'name' }
  ];

  public items: any[] = [];

  async ngOnInit() {
    // this._tableService.getItems().subscribe((data: any) => {
    //   this.items = data.items;
    // });
    this.getItems();
  }

  getItems(){
    this._http.get('https://po-sample-api.fly.dev/v1/heroes').subscribe((data: any) => {
      this.items = data.items;
      // debugger
    }, error => console.error(error));
  }
}
