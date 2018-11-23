import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  latitude = 17.468915 ;
  longitude = 78.367789 ;

  onChooseLocation(event)
  {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
}
