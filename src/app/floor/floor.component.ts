import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
})
export class FloorComponent implements OnInit {
  @Input() floorNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
