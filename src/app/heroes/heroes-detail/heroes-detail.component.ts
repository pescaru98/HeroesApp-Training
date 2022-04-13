import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../models/hero.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HeroesApiService} from "../heroes-api.service";
import {combineLatest, map, Observable} from "rxjs";

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.scss']
})
export class HeroesDetailComponent implements OnInit {

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute, private router: Router, private heroesApiService: HeroesApiService) {
    // const heroId = Number(route.snapshot.params['id']);
    const heroId$ = route.paramMap.pipe(map(
      params => {
        return Number(params.get('id'));
      }));
    const heroes$ = this.heroesApiService.getHeroes();
    this.hero$ = combineLatest([heroId$, heroes$]).pipe(
      map(([heroId, heroes]) => heroes.find(hero => hero.id === heroId)),
      map(foundHero => {
        if (foundHero) return foundHero;
        this.router.navigate(['heroes']);
        return {} as Hero;
      }));
    //this.router.navigate(['/heroes']);


  }

  ngOnInit(): void {

  }

}
