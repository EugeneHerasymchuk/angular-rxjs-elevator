import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lift-status',
  templateUrl: './lift-status.component.html',
})
export class LiftStatusComponent implements OnInit {
  @Input() status: string | null = '';
  constructor() { }

  ngOnInit(): void {
  }

}
