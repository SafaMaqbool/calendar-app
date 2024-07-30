import { Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

export const routes: Routes = [
  { path: '', component: CalendarViewComponent },
  { path: 'appointment-form', component: AppointmentFormComponent },
];
