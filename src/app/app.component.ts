import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {City} from '../shared/city';
import {Street} from '../shared/street';
import {DataService} from '../shared/data.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';

   cities: City[] = [];
   streets: Street[] = [];

   private _sbs: Subscription[] = [];

  constructor( private dataService: DataService) {
    this.cities = [];
    this.streets = [];
  }

  ngOnInit() {
    this.dataService.getToken();
    this.dataService.getCities();
    this._sbs.push(this.dataService.CitiesObserver.subscribe((cities) => this.cities = cities));
    this._sbs.push(this.dataService.StreetsObserver.subscribe((streets) => this.streets = streets));
  }

  citySelected(value) {
    this.dataService.getStreets(value);
  }

  ngOnDestroy() {
    this._sbs.forEach(s => s.unsubscribe());
  }
}
