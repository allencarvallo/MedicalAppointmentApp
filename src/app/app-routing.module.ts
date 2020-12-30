import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AboutComponent } from './components/pages/about/about.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';

const routes: Routes = [
  {
    path: '', component: AppointmentsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'add', component: AddAppointmentComponent
  },
  {
    path: 'patient-login', component: PatientLoginComponent
  },
  {
    path: 'patient-signup', component: PatientSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
