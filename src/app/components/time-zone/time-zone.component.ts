import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {

  continente = "America";
  pais = "Bogotá";
  dayOfYear = 111;
  dayOfWeek = 4;
  weekNumber = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
