import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { DataService } from "../data.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {


  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;

 
  constructor(
    private store: Store<any>,
    private dataService: DataService
  ) { 
    this.loc$ = store.pipe(select('loc'));
    this.loc$.subscribe(loc => {
      this.loc = loc;
      this.searchWeather(loc);
    })
  }

  ngOnInit(): void {
  }

  searchWeather(loc: string) {
    this.msg = '';
    this.currentWeather = {};
    this.dataService.getWeather(loc)
      .subscribe(res => {
        this.currentWeather = res;
      }, err => {
        if (err.error && err.error.message) {
          alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert('Failed to get weather.');
      }, () => {
    })
  }
resultFound() {
  return Object.keys(this.currentWeather).length > 0;
}


}
