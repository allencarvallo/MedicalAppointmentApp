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

  @Output() addAppointment: EventEmitter<any> = new EventEmitter();

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      console.log(this.doctors);
    });
  }

}
