import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../../models/patient';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  patientEmail?: string;
  patientPassword?: string; 

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const patientLoginData = {
      patientEmail: this.patientEmail,
      patientPassword: this.patientPassword
    }
    // this.patientService.patientLogin(patientLoginData).subscribe();
  }

}
