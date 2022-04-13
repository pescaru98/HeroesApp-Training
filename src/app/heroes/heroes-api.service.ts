import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hero} from "./models/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroesApiService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('https://retoolapi.dev/7LV5Tg/heroes?fbclid=IwAR3a-orfPaCDEiE6YGo01lcnGkBCaHNK4RrV9h2sKYCZSnKOazFsSnlU6IE');
  }
}
