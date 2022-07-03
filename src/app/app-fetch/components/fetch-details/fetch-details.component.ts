import {Component, OnInit, Input, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.scss']
})
export class FetchDetailsComponent implements OnInit {

  @Input() temperature: any
  @Input() cityName: any

  weatherIcon: any

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  iconCall(icon: any){
    console.log(icon);
    this.weatherIcon = `http://openweathermap.org/img/wn/${icon}@4x.png`;
    console.log(this.weatherIcon);
  }

}
