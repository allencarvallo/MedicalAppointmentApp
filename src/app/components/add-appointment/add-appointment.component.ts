import { Component, OnInit } from '@angular/core';

import { Doctor } from './../../models/doctor';
import { DoctorService } from './../../services/doctor.service';
import { Patient } from './../../models/patient';
import { PatientService } from './../../services/patient.service';
import { AppointmentService } from './../../services/appointment.service';
import { Appointment } from './../../models/appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

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
  appointmentTime?: any;
  appointment?: Appointment;
  appointmentId?: number;
  
  constructor(private doctorService: DoctorService, 
              private patientService: PatientService,
              private appointmentService: AppointmentService,
              private route: ActivatedRoute,
              private router: Router
             ) {}

  ngOnInit(): void {

    this.patientId = this.patientService.patientId;
    const appointmentId = this.route.snapshot.paramMap.get('id');
    if(appointmentId)
    {
      this.appointmentId = +appointmentId;
    
      this.appointmentService.getAppointmentById( this.appointmentId)
        .subscribe(appointment => {
          this.description = appointment.description;
          this.appointmentTime = new DatePipe('en').transform(appointment.appointmentTime, 'yyyy-MM-dd');
          this.doctorId = appointment.doctorId;
        });
        
    }

    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      //console.log(this.doctors);
    });

    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });

  }

  onSubmit() {
    const appointment: Appointment = {
      description: this.description,
      appointmentTime: this.appointmentTime,
      doctorId: this.doctorId,
      patientId: this.patientId
    };
    if (this.appointmentId) {
      appointment.appointmentId = this.appointmentId;
      this.appointmentService.updateAppointment(appointment).subscribe(() =>
        this.router.navigate(["appointments"])
      );
    }
    else {
      this.appointmentService.addAppointment(appointment).subscribe(() =>
      this.router.navigate(["appointments"]));
    }
  }

}
