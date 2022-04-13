import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.scss']
})
export class HeroButtonComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() title!: string;
  @Output() buttonClicked = new EventEmitter<boolean>();
  obs$: Observable<unknown>;
  subscriptions: Subscription;

  constructor() {
    console.log("Constructor " + this.title);
    this.obs$ = timer(1000, 1000);
    this.subscriptions = this.obs$.subscribe();
    this.subscriptions.add(this.obs$.subscribe());
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges " + changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit" + this.title);
  }

  ngDoCheck() {
    console.log("ngDoCheck" + this.title);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentCheck");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.subscriptions.unsubscribe();
  }
}
