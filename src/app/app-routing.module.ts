import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';

const routes: Routes = [
  {
    path: 'appointments', component: AppointmentsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-appointment', component: AddAppointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'edit-appointment/:id', component: AddAppointmentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'patient-login', component: PatientLoginComponent
  },
  {
    path: 'patient-signup', component: PatientSignupComponent
  },
  { 
    path: '',   redirectTo: 'appointments', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
