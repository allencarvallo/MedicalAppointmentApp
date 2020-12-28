import { Component, OnInit, Input } from '@angular/core';
import { Appointment }  from '../../models/appointment';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {

  @Input() appointment?: Appointment;

  constructor() { }

  ngOnInit(): void {
  }

}
