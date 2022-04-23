import { Component, OnInit } from '@angular/core';
import { TimeLocationService } from 'src/app/services/time-location.service';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  timeMessage: String;
  time:Date = new Date();
  ubication: String;
  classListIcon = ["message__icon", "message__icon--type_sun"];

  constructor(private timeLocation: TimeLocationService) {
        
    this.initTimeMessage(this.time.getHours());
  }

  ngOnInit(): void {
    this.timeLocation.location.subscribe( (apiData:{country_code, city}) => {
      this.ubication = `In ${apiData.city}, ${apiData.country_code}`;
    });

    this.timeLocation.time.subscribe( (apiData:{ datetime }) => {
      this.time = apiData.datetime;
      this.initTimeMessage(new Date(this.time).getHours());
    });
  }

  initTimeMessage(hours){    
    if(hours < 12) {
      this.timeMessage = "Good Morning, it's currently";
      this.classListIcon = ["message__icon", "message__icon--type_sun"];
    } else if (hours >= 12 && hours < 18) {
      this.timeMessage = "Good Afternoon, it's currently";
      this.classListIcon = ["message__icon", "message__icon--type_sun"];
    } else {
      this.timeMessage = "Good Night, it's currently";
      this.classListIcon = ["message__icon", "message__icon--type_moon"];
    }
  }

}
