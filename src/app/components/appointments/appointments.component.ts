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

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
      console.log(this.appointments);
    });
  }

  addAppointment(appointment: Appointment) {
    this.appointmentService.addAppointment(appointment).subscribe(appointment => {
      this.appointments?.push(appointment);
    });
  }
}
