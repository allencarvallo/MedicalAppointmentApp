import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';
import { Patient } from './../../models/patient';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  patientId?: any;
  patientEmail?: string;
  patientPassword?: string; 

  loading: boolean = true;
  errorMessage: string = "";
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    const patientLoginData = {
      patientEmail: this.patientEmail,
      patientPassword: this.patientPassword
    }

    this.patientService.patientLogin(patientLoginData)
    .subscribe
      (p => {
        this.patientId = p.patientId;
        console.log(this.patientId);
        // To set patient Id in local storage
        localStorage.setItem('patientId', this.patientId)
        },
      error => {                              
        console.error('error caught in component')
        this.errorMessage = error;
        this.loading = false;
        alert(`Invalid Credentials!! \nUser with email: ${patientLoginData.patientEmail} and password entered does not exist`);
        }
      );

  }

}
