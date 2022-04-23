import { Component, OnInit, ViewChild } from '@angular/core';
import { TimeLocationService } from './services/time-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clockApp';
  classListBg = ["bg-daytime", "bg-time"];

  constructor(private timeLocation: TimeLocationService) {
        
  }

  ngOnInit() {

    this.timeLocation.time.subscribe( (apiData:{ datetime }) => {      
      this.initBgTheme(new Date(apiData.datetime).getHours());
    });

  }

  initBgTheme(hour) {
    if(hour < 18){
      this.classListBg = ["bg-daytime", "bg-time"];//daytime
    } else {
      this.classListBg = ["bg-nighttime", "bg-time"];
    }
  }
}
