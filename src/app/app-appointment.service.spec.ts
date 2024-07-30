import { TestBed } from '@angular/core/testing';

import { AppAppointmentService } from './app-appointment.service';

describe('AppAppointmentService', () => {
  let service: AppAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
