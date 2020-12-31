import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Doctor } from '../models/doctor';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorsUrl: string = "http://localhost:55854/MedicalAppointment/Doctors";

  constructor(private http: HttpClient) { }

    // Get Doctors
    getDoctors(): Observable<Doctor[]> {
      return this.http.get<Doctor[]>(`${this.doctorsUrl}`);
    }
    
}
