import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Hero} from "./models/hero.model";

@Injectable({
  providedIn: 'root'
})
export class HeroesApiService {

  heroes: Hero[] = [];

  constructor(private http: HttpClient) {
  }

  async getHeroes() {
    if (this.heroes.length > 0) {
      return this.heroes;
    }
    const response = this.http.get<Hero[]>('https://retoolapi.dev/7LV5Tg/heroes?fbclid=IwAR3a-orfPaCDEiE6YGo01lcnGkBCaHNK4RrV9h2sKYCZSnKOazFsSnlU6IE');
    this.heroes = await firstValueFrom(response);
    return this.heroes;
  }
}
