import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { TimeZoneComponent } from './components/time-zone/time-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DatetimeComponent,
    TimeZoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
