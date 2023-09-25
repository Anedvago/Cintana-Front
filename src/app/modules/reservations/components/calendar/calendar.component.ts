import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CardComponent } from 'src/app/core/card/card.component';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { BookingService } from '../../services/booking.service';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    CardComponent,
    ButtonBlueComponent,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  @Output()
  public eventClick: EventEmitter<any> = new EventEmitter<any>();

  public eventsBooking: EventSourceInput | undefined = [
    {
      id: '1',
      start: '2023-09-25T08:00:00',
      end: '2023-09-26T11:00:00',
      title: 'Carlos Gómez / 103',
    },
  ];

  public calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    eventClick: this.handleDateClick.bind(this),
    displayEventTime: true,
    displayEventEnd: true,
    eventTimeFormat: {
      // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    },
  };
  constructor(private roomService: BookingService) {
    this.getAllBookings();
    console.log(this.eventsBooking);
  }

  handleDateClick(arg: any) {
    console.log(arg.event.id + ' ' + arg.event.title);
    this.eventClick.emit(arg.event);
  }

  public getAllBookings() {
    this.roomService.getAllBookings().then((data: any) => {
      if (data != null) {
        this.eventsBooking = data.map((obj: any) => ({
          ...obj,
          id: obj.id.toString(), // Convierte el id a cadena
        }));
        this.calendarOptions.events = this.eventsBooking;
        console.log(JSON.stringify(this.eventsBooking));
      }
    });
  }
}
