import { Component , Input , Output , Injectable } from '@angular/core';
import {City} from './city';
import {Street} from './street';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

// comment out this for real data:
const citiese: City[] = [
  {
    cityCode: 964,
    cityName: 'Tel Aviv'
  },
  {
    cityCode: 10103,
    cityName: 'אכסנית נוער מצד'
  },
  {
    cityCode: 10104,
    cityName: 'אכסנית עין גדי'
  },
  {
    cityCode: 1359,
    cityName: 'אל סייד'
  },
];


// comment out this for real data:
const streetse: Street[] = [
  {
    streetCode: '26725' ,
    streetName: '(אלעזר (רוקח'
  },
  {
    streetCode: '38682',
    streetName : '(דוד רחל (שרעבי'
  },
  {
    streetCode: '39009',
    streetName: '(זאבי רחבעם (גנדי'
  }
]

@Injectable()
export class DataService {
 token: string;
 cities = new BehaviorSubject<City[]>([]);
 streets = new BehaviorSubject<Street[]>([]);

 CitiesObserver = this.cities.asObservable();
 StreetsObserver = this.streets.asObservable();

 private apiUrlGetToken = 'https://sales.aig.co.il/api2/general/token/site/travel';
 private apiUrlGetCities = 'https://sales.aig.co.il/api2/general/init';
 private apiUrlGetStreets = 'https://sales.aig.co.il/api2/general/city/streets/';

 constructor(private http: HttpClient) {}

 getToken(): void {
   // uncomment this for real data:--------------------------

  // this.http.get(this.apiUrlGetToken,{headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin' : '*'
  //  }})
  //   .subscribe((res: any) => this.token = res.headers.get('Authorization'));
}

 getCities(): void {
   // comment out this for real data:
   this.cities.next(citiese);

   // uncomment this for real data:--------------------------

   // this.http.get(this.apiUrlGetCities, {headers:{
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin' : '*',
    //   'Authorization': this.token
    // }}).subscribe((cities: City[]) => this.cities.next(cities));
 }

 getStreets(cityCode: any): void {
   // comment out this for real data:
   this.streets.next(streetse);

   // uncomment this for real data:--------------------------

   // this.http.get(`${this.apiUrlGetStreets}${cityCode}`, {headers :{
    //   'Content-Type': 'application/json',
     //  'Access-Control-Allow-Origin' : '*',
     //  'Authorization': this.token
     // }}).subscribe((streets: Street[]) => this.streets.next(streets));
 }
}
