import { Component, OnInit } from '@angular/core';

import { Doctor } from './../../models/doctor';
import { DoctorService } from './../../services/doctor.service';
import { Patient } from './../../models/patient';
import { PatientService } from './../../services/patient.service';
import { AppointmentService } from './../../services/appointment.service';
import { Appointment } from './../../models/appointment';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  doctors?: Doctor[];
  patients?: Patient[];
  appointments?: Appointment[];
  patientName?: string;
  patientId?: number;
  description?: string;
  doctorName?: string;
  doctorId?: number;
  appointmentTime?: Date;
  appointment: any;

  constructor(private doctorService: DoctorService, 
              private patientService: PatientService,
              private appointmentService: AppointmentService,
             ) {}

  ngOnInit(): void {

    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      //console.log(this.doctors);
    });

    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    })
  }

  onSubmit() {
    const appointment = {
      description: this.description,
      appointmentTime: this.appointmentTime,
      doctorId: this.doctorId,
      patientId: this.patientId
    }
    this.appointmentService.addAppointment(appointment);
  }

}
