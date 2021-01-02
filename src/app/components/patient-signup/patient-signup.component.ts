import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../services/patient.service';

@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.css']
})
export class PatientSignupComponent implements OnInit {

  patientName?: string;
  patientEmail?: string;
  patientPassword?: string; 

  constructor(private patientService: PatientService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const patientSignupData = {
      patientName:this.patientName,
      patientEmail: this.patientEmail,
      patientPassword: this.patientPassword
    }
    this.patientService.patientSignup(patientSignupData).subscribe(() => {
      this.router.navigate(["patient-login"])
    }
    );
  }

}
