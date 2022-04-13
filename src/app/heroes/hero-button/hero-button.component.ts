import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.scss']
})
export class HeroButtonComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
