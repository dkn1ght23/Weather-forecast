import { Component, OnInit, Input } from '@angular/core';
import {FetchSearchComponent} from "../fetch-search/fetch-search.component";
import {BlogService} from "../../../root-browser/services/blog.services";


@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.scss']
})
export class FetchDetailsComponent implements OnInit {

  @Input() temperature: any
  @Input() cityName: any

  constructor() { }

  ngOnInit(): void {
  }

}
