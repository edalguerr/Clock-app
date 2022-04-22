import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: {
    text: string,
    author: string
  }

  constructor() {
    this.quote = {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam dignissimos labore non.",
      author: "Ada lovelace"
    }
  }

  ngOnInit(): void {
  }

}
