import { Component, OnInit } from '@angular/core';
import { TimeLocationService } from 'src/app/services/time-location.service';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {
  
  timeData = {      
    dayWeek: 0,
    dayYear: 0,
    weekNumber: 0,
    timeZone: ""
  }

  constructor(private timeLocation: TimeLocationService) { }

  ngOnInit(): void {
    this.timeLocation.time.subscribe( (apiData:{
      day_of_week,
      day_of_year,
      week_number,
      timeZone
    }) => {
      this.timeData.dayWeek = apiData.day_of_week;
      this.timeData.dayYear = apiData.day_of_year;
      this.timeData.weekNumber = apiData.week_number;
      this.timeData.timeZone = apiData.timeZone;
    });
  }

}
