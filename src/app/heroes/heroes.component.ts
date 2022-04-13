import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Hero} from "./models/hero.model";
import {HeroesApiService} from "./heroes-api.service";
import {catchError, Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {
  hero = {
    id: 2,
    name: "Robin Hood"
  };
  /*  @Input() title!: string;
    @Output() titleChange = new EventEmitter<string>();*/

  selectedHero?: Hero;
  heroes: Hero[] = [];
  heroes$: Observable<Hero[]>;

  constructor(private heroesApiService: HeroesApiService, private changeDetector: ChangeDetectorRef, private router: Router) {
    console.log("ctor");
    this.heroes$ = this.heroesApiService.getHeroes().pipe(catchError(err => {
      console.log("error");
      return [];
    }));
  }

  ngOnInit(): void {
    /*    this.heroesApiService.getHeroes().subscribe({
          next: heroes => { this.heroes = heroes; this.changeDetector.markForCheck(); },
          error: err => console.log(err),
          complete: () => console.log("Finished")
        });*/
    console.log("after on init");
  }

  logChange($event: string) {
    console.log($event);
    // this.titleChange.emit($event);
  }

  async onSelect(hero: Hero) {
    await this.router.navigate(['/heroes', hero.id]);
    this.selectedHero = hero;
  }
}
