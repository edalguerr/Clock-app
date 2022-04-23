import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/interfaces/quote';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote;

  constructor(private quoteService:QuotesService) { 
    this.quote = {
      content: "",
      author: ""
    }   
  }

  ngOnInit(): void {
    this.quoteService.quote.subscribe( (apiQuote:Quote) => {
      this.quote = apiQuote;
      console.log(apiQuote);
    });
  }


  refreshQuote() {
    this.quoteService.quote.subscribe( (apiQuote:Quote) => {
      this.quote = apiQuote;
      console.log(apiQuote);
    });
  }

}
