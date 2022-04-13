import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HeroesApiService} from "../heroes-api.service";

@Injectable({
  providedIn: 'root'
})
export class HeroDetailGuard implements CanActivate {
  constructor(private heroApiService: HeroesApiService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const heroId = Number(route.paramMap.get('id'));
    const hasHero = this.heroApiService.heroes.some(hero => hero.id === heroId);
    if (hasHero)
      return true;
    return this.router.parseUrl('/');
  }

}
