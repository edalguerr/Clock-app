import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clockApp';
  classListBg = ["bg-daytime", "bg-time"];
  classListMainContainer = ["main-container"];
  classListIconButton = ["button-more__icon"];

  ngOnInit() {

    this.initBgTheme(new Date().getHours());
    
  }

  initBgTheme(hour) {
    if(hour < 18){
      this.classListBg = ["bg-daytime", "bg-time"];//daytime
    } else {
      this.classListBg = ["bg-nighttime", "bg-time"];
    }
  }

  showMore() {
    if (this.classListMainContainer.includes("main-container--show_more")){
      this.classListMainContainer = ["main-container"];
      this.classListIconButton = ["button-more__icon"];
      return;
    } 

    this.classListMainContainer = ["main-container", "main-container--show_more"];  
    this.classListIconButton = ["button-more__icon", "button-more__icon--orientation_up"];  
  }
}
