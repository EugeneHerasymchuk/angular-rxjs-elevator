import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LiftControllersComponent } from './lift-controllers/lift-controllers.component';
import { FloorComponent } from './floor/floor.component';
import { CommonModule } from '@angular/common';
import { DoorControllersComponent } from './door-controllers/door-controllers.component';
import { LiftComponent } from './lift/lift.component';
import { LiftNumbersComponent } from './lift-numbers/lift-numbers.component';
import { LiftStatusComponent } from './lift-status/lift-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LiftControllersComponent,
    FloorComponent,
    DoorControllersComponent,
    LiftComponent,
    LiftNumbersComponent,
    LiftStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
