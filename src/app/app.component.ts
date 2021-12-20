import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { ElevatorService } from './services/elevator/elevator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  floors = [1, 2, 3, 4, 5]
  title = 'angular-elevator-rxjs';
  currentStatus$: Subject<string> = new Subject();
  constructor(private elevatorService: ElevatorService) {
    this.currentStatus$ = this.elevatorService.currentStatus$;
    this.elevatorService.nextFloorSequence$.subscribe(floor => {
      this.elevatorService.arriveAtFloor(floor)
    })
  }

  openDoors() {

  }

  closeDoors() {

  }

  requestFloor(floorNumber: number) {
    this.elevatorService.requestFloor(floorNumber)
  }
}
