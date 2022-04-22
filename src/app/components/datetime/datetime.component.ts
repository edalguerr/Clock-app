import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  timeMessage: String;
  time:Date;
  ubication: String;

  constructor() {
    this.time = new Date(Date.now());
    this.timeMessage = "Good Morning, it's currently";
    this.ubication = "In london, Uk";
  }

  ngOnInit(): void {
  }

}
