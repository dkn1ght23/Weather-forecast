import {Component, OnInit, Input, Injectable, OnChanges, SimpleChanges} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.scss']
})
export class FetchDetailsComponent implements OnInit, OnChanges {

  @Input()  temperature: any
  @Input()  cityName: any
  @Input()  iconName: any
  @Input()  maxTemp: any
  @Input()  minTemp: any
  @Input()  humidity: any
  @Input()  wind: any

  weatherIcon: any
  date = new Date();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
        this.iconCall();
    }

  ngOnInit(): void {
    this.iconCall();
  }

  iconCall() {
    if(!this.iconName){
      return;
    }
    this.weatherIcon = `http://openweathermap.org/img/wn/${this.iconName}@4x.png`;
    console.log(this.weatherIcon);
  }

}
