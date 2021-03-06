import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Patient } from './../models/patient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientId?: number = 0;
  patientsUrl: string = "http://localhost:55854/MedicalAppointment/Patients";
  patientLoginUrl: string = "http://localhost:55854/MedicalAppointment/Patients/Login";

  constructor(private http: HttpClient) { }

  // Get Patients
  getPatients():Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.patientsUrl}`);
  }

  // Patient Login
  patientLogin(patient: Patient): Observable<Patient> {
    console.log('Patient Login');
    //console.log(patient);
    return this.http.post<Patient>(this.patientLoginUrl, patient, httpOptions);
  }

  // Patient Signup
  patientSignup(patient: Patient): Observable<Patient> {
    console.log('Patient SignUp')
    console.log(patient);
    return this.http.post<Patient>(this.patientsUrl, patient, httpOptions);
  }
  
}
