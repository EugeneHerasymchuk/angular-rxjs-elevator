import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, of, startWith, Subject, switchMap, tap, zip } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {
  timeoutToChangeFloor = 400;
  readyToChange$: Subject<void> = new Subject();
  requestedNumber$: Subject<number> = new Subject();
  currentStatus$: Subject<string> = new Subject();
  currentSequenceFloor: number[] = [];
  currentFloor: number = 0;
  doorsStatus$ = new BehaviorSubject(false) // doors closed by default


  nextFloorSequence$: Observable<number> = zip(this.requestedNumber$, this.readyToChange$.pipe(startWith(true))).pipe(
    map(([value, ready]) => value),
    switchMap((number) => this.moveElevatorTo(number)),
    tap((number) => {
      this.doorsStatus$.next(true)
      this.currentFloor = number;
      this.currentStatus$.next(`arrived at ${this.currentFloor}, doors opening ...`)
    })
    // scan<number, number[]>((acc, number) => {
    //   if (!acc.length) {
    //     return [number]
    //   }

    //   // TODO: add logic to apply rules of adding new floor to move to
    //   return [...acc, number]
    //   // }

    //   // return

    // }, this.currentSequenceFloor),
    // map((floorSequence: number[]) => { return floorSequence[0] }),
    // repeatWhen(() => this.readyToChange$)
  )


  constructor() { }

  moveElevatorTo(floorNumber: number): Observable<number> {
    if (floorNumber === this.currentFloor) {
      return of(floorNumber).pipe(tap((number) => {
        this.doorsStatus$.next(true)
        this.currentStatus$.next(`already on floor: ${this.currentFloor}, doors opening ...`)
      }))
    }
    return of(floorNumber).pipe(tap((number) => {
      this.doorsStatus$.next(false)
      this.currentStatus$.next(`doors closing ..., moving to ${floorNumber}`)
    }), delay((floorNumber - this.currentFloor) * 2000))
  }

  arriveAtFloor(floorNumber: number) {
    // TODO actually remove proper value
    this.currentSequenceFloor.shift();
    this.readyToChange$.next();
  }

  // addFloorToSequenceBasedOnCurrentFloor(acc: number[], number: number): ObservableInput<number[]> {
  //   // calculate using currentFloor
  //   // the first item of acc - "currentFloor"
  //   // if acc.length - elevator is moving
  //   // we need to understand whether we can add it to the end,
  //   // or this requested number can easily be inserted because it's on our way
  //   return this.currentFloor$.pipe(map(currentFloor => {
  //     return acc
  //   }))
  // }


  requestFloor(floorNumber: number) {
    this.requestedNumber$.next(floorNumber)
  }

  moveElevator() {

  }
}
