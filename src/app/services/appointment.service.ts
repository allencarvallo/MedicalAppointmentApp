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

  appointmentsUrl: string = 'http://localhost:55854/MedicalAppointment/Appointments';


  constructor(private http: HttpClient) { }

  // Get Appointments by patient id
  getAppointmentsByPatientId(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.appointmentsUrl}/patient/${patientId}`);
  }

  // GEt Appointments by id 
  getAppointmentById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.appointmentsUrl}/${id}`);
  }

  // Add Appointment
  addAppointment(appointment: Appointment):Observable<Appointment> {
    console.log('Adding appointment');
    console.log(appointment);
    console.log(`${this.appointmentsUrl}${appointment}${httpOptions}`);
    return this.http.post<Appointment>(this.appointmentsUrl, appointment, httpOptions);
  }

  // Edit Appointment
  updateAppointment(appointment: Appointment): Observable<Appointment> {
    const id = appointment.appointmentId;
    return this.http.put<Appointment>(`${this.appointmentsUrl}/${id}`,appointment, httpOptions);
  }

  // Delete Appointment
  deleteAppointment(appointment: Appointment) {
    const id = appointment.appointmentId;
    return this.http.delete(`${this.appointmentsUrl}/${id}`, httpOptions);
  }
  
}
