import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TimeLocationService } from 'src/app/services/time-location.service';


@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  @Output() newHour = new EventEmitter<number>();
  timeMessage: String = "";
  time:Date = new Date();
  hourBefore = this.time.getHours();
  ubication: String;
  classListIcon = ["message__icon", "message__icon--type_sun"];

  constructor(private timeLocation: TimeLocationService) {
        
    this.initTimeMessage(this.time.getHours());
  }

  ngOnInit(): void {
    this.timeLocation.location.subscribe( (apiData:{country_code, city}) => {
      this.ubication = `In ${apiData.city}, ${apiData.country_code}`;
    });

    this.initTimeMessage(new Date().getHours());
    let interval = (60 - (new Date()).getSeconds()) * 1000 + 5;

    setTimeout(()=>{

      this.time = new Date();      
      this.initTimeMessage(this.time.getHours());
      console.log(this.time);
      
      setInterval(()=>{
        this.time = new Date();      
        this.initTimeMessage(this.time.getHours());      

        if(this.hourBefore != this.time.getHours()){          
          this.newHour.emit(this.time.getHours());
        }

      }, 60000);

    }, interval);
    
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
