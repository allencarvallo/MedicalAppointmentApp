import { Router } from '@angular/router';
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

  loading: boolean = true;
  errorMessage: string = "";
  constructor(private patientService: PatientService,
              private router: Router) { }

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
        console.log(p.patientId);
        // To set patient Id in local storage
        localStorage.setItem('patientId', ''+p.patientId);
        this.patientService.patientId = p.patientId;
        this.router.navigate(["appointments"]);
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
