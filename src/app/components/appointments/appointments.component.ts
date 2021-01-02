import { PatientService } from './../../services/patient.service';
import { Component, OnInit } from '@angular/core';

import { AppointmentService }  from '../../services/appointment.service';
import { Appointment }  from '../../models/appointment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments?: Appointment[];
  deleteMessage?: string = "";
  // appointment?: Appointment;

  constructor(private appointmentService: AppointmentService,
              private router: Router,
              private patientService: PatientService) {}

  ngOnInit(): void {
    const patientId = this.patientService.patientId;
    this.appointmentService.getAppointmentsByPatientId(patientId as number).subscribe(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }

  appointmentEdit(appointment: Appointment) {
    this.router.navigate(['edit-appointment', appointment.appointmentId]);
  }

  appointmentDelete(appointment: Appointment) {
    // alert(`Delete appointment with id: ${appointment.appointmentId}`)
    this.appointmentService.deleteAppointment(appointment)
      .subscribe(() => {
        this.appointments?.splice(this.appointments.indexOf(appointment), 1);
      });
  }

  addAppointment() {
    this.router.navigate(["add-appointment"]);
  }

}
