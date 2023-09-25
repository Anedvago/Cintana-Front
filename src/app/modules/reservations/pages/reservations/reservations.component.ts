import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/calendar/calendar.component';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { ModalComponent } from 'src/app/core/modal/modal.component';
import { FormReservationComponent } from '../../components/form-reservation/form-reservation.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    ButtonBlueComponent,
    ModalComponent,
    FormReservationComponent,
  ],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {
  public visivility: string = 'invisible';
  public content: any;

  public closeModal() {
    this.visivility = 'invisible';
  }

  public openModalNew() {
    this.visivility = 'visible';
    this.content = '';
  }

  public openModalEdit(event: any) {
    this.visivility = 'visible';
    this.content = event.id;
  }
}
