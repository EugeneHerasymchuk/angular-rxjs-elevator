import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-door-controllers',
  templateUrl: './door-controllers.component.html',
})
export class DoorControllersComponent implements OnInit {
  @Output() open: EventEmitter<void> = new EventEmitter();
  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
