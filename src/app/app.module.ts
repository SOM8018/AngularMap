import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyBL5wJ2hc_uqClG9qO1sRwb-IN0wY0Au3M',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
