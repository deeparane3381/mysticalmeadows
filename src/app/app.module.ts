/**
 * @Date:   2018-12-25T01:51:16+05:30
 * @Last modified time: 2018-12-30T17:39:16+05:30
 */



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/Commons/header/header.component';
import { FooterComponent } from './components/Commons/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
      HeaderComponent,
    FooterComponent,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
