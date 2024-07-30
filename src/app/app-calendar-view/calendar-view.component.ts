import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Appointment, AppointmentService } from '../app-appointment.service'; // Correct import

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css'],
})
export class CalendarViewComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.appointments = this.appointmentService.getAppointments();
  }

  onDrop(event: CdkDragDrop<Appointment[]>) {
    const previousIndex = this.appointments.findIndex(
      (a) => a === event.item.data
    );
    const currentIndex = event.currentIndex;
    const movedAppointment = this.appointments[previousIndex];
    this.appointments.splice(previousIndex, 1);
    this.appointments.splice(currentIndex, 0, movedAppointment);
    this.appointmentService.updateAppointments(this.appointments);
  }
}
