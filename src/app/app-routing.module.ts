import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroesDetailComponent} from "./heroes/heroes-detail/heroes-detail.component";

const routes: Routes = [{
  path: 'heroes',
  component: HeroesComponent,
  /*  children: [{
      path: ':id',
      component: HeroesDetailComponent
    }]*/
},
  {
    path: 'heroes/:id',
    component: HeroesDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
