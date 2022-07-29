import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../root-browser/services/blog.services";

@Component({
  selector: 'app-fetch-search',
  templateUrl: './fetch-search.component.html',
  styleUrls: ['./fetch-search.component.scss']
})
export class FetchSearchComponent implements OnInit {

  weatherReport : any
  temperature : any
  cityName = ""
  name = ""

  weatherIconDetails: any
  icon: any

  maxTemp: any
  minTemp: any
  humidity: any
  wind: any
  feelsLike: any

  searchToken !: boolean

  constructor(public blogServices: BlogService) {
  }

  ngOnInit(): void {
  }

  buttonClicked(city: any){
    this.blogServices.getAllPosts(city).subscribe((response: any) => {
      //console.log(response);
      this.weatherReport = response["main"];
      //console.log(this.weatherReport);

      //details to variable
      this.temperature = this.weatherReport.temp;
      this.minTemp = this.weatherReport.temp_min;
      this.maxTemp = this.weatherReport.temp_max;
      this.humidity = this.weatherReport.humidity;
      this.feelsLike = this.weatherReport.feels_like;

      //windSpeed
      this.wind = response["wind"].speed;

      this.name = city;
      //console.log(this.name);

      //weatherIcon
      this.weatherIconDetails = response['weather'][0];
      //console.log(this.weatherIconDetails);
      this.icon = this.weatherIconDetails.icon;
      //console.log(this.icon);

      //searchToken
      this.searchToken = true

    })
  }

}
