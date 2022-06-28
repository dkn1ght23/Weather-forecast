import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {environment} from "../../../environments/environment";

const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;


@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor(private httpClient: HttpClient) {

  }

  getAllPosts(cityName: any) {
    console.log(cityName)
    return this.httpClient.get(`${API_URL}/weather?q=${cityName}&appid=${API_KEY}`);
  }

}
