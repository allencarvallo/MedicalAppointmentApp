import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Doctor } from './../../models/doctor';
import { DoctorService } from './../../services/doctor.service';


@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  doctors?: Doctor[];
  patientName?: string;
  description?: string;
  doctorName?: string;
  appointmentTime?: Date;

  @Output() addAppointment: EventEmitter<any> = new EventEmitter();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      //console.log(this.doctors);
    });
  }

  onSubmit() {
    const appointment = {
      patientName: this.patientName,
      description: this.description,
      doctorName: this.doctorName,
      appointmentTime: this.appointmentTime
    }

    this.addAppointment.emit(appointment);
    console.log('Submitting')
  }

}
