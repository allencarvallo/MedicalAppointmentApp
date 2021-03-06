import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'; 
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientSignupComponent } from './components/patient-signup/patient-signup.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    AddAppointmentComponent,
    HeaderComponent,
    PatientLoginComponent,
    PatientSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
