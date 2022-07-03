import { Component, OnInit } from '@angular/core';
import {BlogService} from "../../../root-browser/services/blog.services";
import {FetchDetailsComponent} from "../fetch-details/fetch-details.component";

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


  constructor(public blogServices: BlogService,
              private fetchDetailsComponent: FetchDetailsComponent) {
  }

  ngOnInit(): void {
  }

  buttonClicked(city: any){
    this.blogServices.getAllPosts(city).subscribe((response: any) => {
      //console.log(response);
      this.weatherReport = response["main"];
      this.temperature = this.weatherReport.temp;
      console.log(this.weatherReport);
      //this.name = response['name'];
      //console.log(this.name);
      this.weatherIconDetails = response['weather'][0];
      //console.log(this.weatherIconDetails);
      this.icon = this.weatherIconDetails.icon;
      console.log(this.icon)
      console.log("inside details");
      this.fetchDetailsComponent.iconCall(this.icon);
    })
  }

}
