import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: any[] = [];

  getAppointments() {
    return this.appointments;
  }

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
  }

  updateAppointments(appointments: any[]) {
    this.appointments = appointments;
  }
}
