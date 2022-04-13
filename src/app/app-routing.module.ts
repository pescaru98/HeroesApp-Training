import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesDetailComponent} from "./heroes/heroes-detail/heroes-detail.component";

const routes: Routes = [{
  path: 'heroes',
  loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
},
  /*{
    path: 'heroes/:id',
    loadChildren: () => import('./heroes/heroes-detail/hero-detail.module').then(m => m.HeroDetailModule)
  }*/];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
