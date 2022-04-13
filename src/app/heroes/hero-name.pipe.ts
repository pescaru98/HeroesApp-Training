import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from "./models/hero.model";

@Pipe({
  name: 'heroName'
})
export class HeroNamePipe implements PipeTransform {

  transform(value: Hero, multiply = 1, something?: string): string {
    return `${value.id * multiply} ${value.name}`;
  }

}
