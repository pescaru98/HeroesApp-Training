import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {HeroesResolver} from "./heroes.resolver";
import { HeroButtonComponent } from './hero-button/hero-button.component';


@NgModule({
  declarations: [HeroesComponent, HeroButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
        resolve: {
          heroes: HeroesResolver
        }
      },
      {
        path: ':id',
        loadChildren: () => import('./heroes-detail/hero-detail.module').then(m => m.HeroDetailModule)
      }
    ])
  ]
})
export class HeroesModule {
}
