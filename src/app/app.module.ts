import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Import DragDropModule

import { AppComponent } from './app.component';
import { AppointmentFormComponent } from './app-appointment-form/appointment-form.component';
import { CalendarViewComponent } from './app-calendar-view/calendar-view.component';

@NgModule({
  declarations: [AppComponent, AppointmentFormComponent, CalendarViewComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    MatFormFieldModule,
    MatInputModule,
    DragDropModule, // Add DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
