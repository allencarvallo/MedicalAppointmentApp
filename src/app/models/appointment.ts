import { Patient } from './patient';
import { Doctor } from './doctor';

export class Appointment {
    appointmentId?: number = 0;
    patientName?: string = '';
    description?: string = '';
    doctorName?: string = '';
    appointmentTime?: any;
    token?: string = '';
    doctor?: Doctor;
    patient?: Patient;
    doctorId?: number;
    patientId?: number;
}
