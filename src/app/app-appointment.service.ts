import { Injectable } from '@angular/core';

// Define an interface for appointment if you have a specific structure
export interface Appointment {
  id: number;
  title: string;
  date: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private appointments: Appointment[] = []; // Local storage for appointments

  constructor() {}

  // Method to get all appointments
  getAppointments(): Appointment[] {
    // Replace with actual logic to fetch appointments (e.g., from an API or local storage)
    return this.appointments;
  }

  // Method to add a new appointment
  addAppointment(appointment: Appointment): void {
    // Logic to add appointment (e.g., update local storage or API)
    this.appointments.push(appointment);
  }

  // Method to update existing appointments
  updateAppointments(updatedAppointments: Appointment[]): void {
    // Logic to update appointments (e.g., save to local storage or API)
    this.appointments = updatedAppointments;
  }

  // Method to delete an appointment
  deleteAppointment(appointmentId: number): void {
    // Logic to delete an appointment (e.g., remove from local storage or API)
    this.appointments = this.appointments.filter(
      (app) => app.id !== appointmentId
    );
  }
}
