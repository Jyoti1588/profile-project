import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getWeather(loc: string){
    return this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=886705b4c1182eb1c69f28eb8c520e20 '
    );
  }

  getArticle(){
    return this.http.get(
        'http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-12&sortBy=publishedAt&apiKey=4e2a533e4c7047508c0ea839a1093ba6'
    );
  }
}
