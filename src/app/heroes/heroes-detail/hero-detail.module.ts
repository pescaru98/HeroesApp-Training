import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeroesDetailComponent} from "./heroes-detail.component";
import {HeroDetailGuard} from "./hero-detail.guard";



@NgModule({
  declarations: [HeroesDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HeroesDetailComponent, canActivate: [HeroDetailGuard]}
    ])
  ]
})
export class HeroDetailModule { }
