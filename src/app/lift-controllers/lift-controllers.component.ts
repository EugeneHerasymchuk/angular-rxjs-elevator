import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lift-controllers',
  templateUrl: './lift-controllers.component.html'
})
export class LiftControllersComponent implements OnInit {
  @Output() up: EventEmitter<void> = new EventEmitter();
  @Output() down: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
