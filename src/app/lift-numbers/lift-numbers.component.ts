import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lift-numbers',
  templateUrl: './lift-numbers.component.html',
})
export class LiftNumbersComponent implements OnInit {
  @Input() floors: number[] = [];

  @Output() selectFloor: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
