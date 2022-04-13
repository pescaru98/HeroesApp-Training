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
    const heroes$ = this.heroesApiService.heroes;
    this.hero$ = heroId$.pipe(
      map((heroId) => this.heroesApiService.heroes.find(hero => hero.id === heroId) as Hero));
    //this.router.navigate(['/heroes']);
  }

  ngOnInit(): void {

  }

}
