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

  constructor(public blogServices: BlogService) {
  }

  ngOnInit(): void {
  }

  buttonClicked(city: any){
    this.blogServices.getAllPosts(city).subscribe((response: any) => {
      console.log(response);
      this.weatherReport = response["main"];
      this.temperature = this.weatherReport.temp;
      //console.log(this.weatherReport);
      //this.name = response['name'];
      //console.log(this.name);
    })
  }

}
