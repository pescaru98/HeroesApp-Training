import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {Hero} from "./models/hero.model";
import {HeroesApiService} from "./heroes-api.service";

@Injectable({
  providedIn: 'root'
})
export class HeroesResolver implements Resolve<Hero[]> {

  constructor(private heroesApiService: HeroesApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero[]> {
    return from(this.heroesApiService.getHeroes());
  }
}
