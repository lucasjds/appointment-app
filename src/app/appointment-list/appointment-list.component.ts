import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent {
  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();

  appointments: Appointment[] = []

  addAppointment() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppt: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppt)
      this.newAppointmentDate = new Date();
      this.newAppointmentTitle = "";
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }
}
