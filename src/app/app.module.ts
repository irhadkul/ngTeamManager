import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {MainRoutesModule} from './shared/main-routes/main-routes.module';
import {DirectivesModule} from './shared/directives/directives.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainRoutesModule,
    DirectivesModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
