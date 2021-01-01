import { Component, OnInit } from '@angular/core';

import { AppointmentService }  from '../../services/appointment.service';
import { Appointment }  from '../../models/appointment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointments?: Appointment[];
  // appointment?: Appointment;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }

  appointmentEdit(appointment: Appointment){
    alert(`Edit appointment with id: ${appointment.appointmentId}`)
  }

  appointmentDelete(appointment: Appointment) {
    alert(`Delete appointment with id: ${appointment.appointmentId}`)
  }

}
