import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { NavMenuComponent } from './pages/nav-menu/nav-menu.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { JackComponent } from './nova/jack/jack.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent,
    NavMenuComponent,
    SecondPageComponent,
    JackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
