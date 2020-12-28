import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';

import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {
    path: '', component: AppointmentsComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'add', component: AddAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
