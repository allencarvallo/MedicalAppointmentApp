import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Appointment } from '../models/appointment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentsUrl: string = 'http://localhost:55854/api/Appointments';

  constructor(private http: HttpClient) { }

  // Get Appointments
  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.appointmentsUrl}`);
  }

  // Add Appointment
  addAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(this.appointmentsUrl, appointment, httpOptions);
  }
}
