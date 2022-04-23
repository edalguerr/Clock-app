import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { DatetimeComponent } from './components/datetime/datetime.component';
import { TimeZoneComponent } from './components/time-zone/time-zone.component';

//Services
import { QuotesService } from './services/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DatetimeComponent,
    TimeZoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ QuotesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
