import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  public titlePage: string = 'Page Table';
  readonly menus: Array<PoMenuItem> = [
    { label: 'Page Table', link: '/table', action: this.changeNamePage.bind(this) },
    { label: 'Second Page', link: '/second-page', action: this.changeNamePage.bind(this) }
  ];

  changeNamePage(menu: PoMenuItem): void {
    this.titlePage = menu.label;
  }

}
