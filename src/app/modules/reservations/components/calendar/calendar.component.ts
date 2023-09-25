import { Component, EventEmitter, Output, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CardComponent } from 'src/app/core/card/card.component';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
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
  @Input()
  public eventsBooking: EventSourceInput | undefined = [];

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
    events: this.eventsBooking /* [
      {
        id: '1',
        title: 'Carlos Gomez / 203',
        start: '2023-09-01',
        end: '2023-09-02',
      },
      {
        id: '2',
        title: 'event 2',
        start: '2023-09-01 08:00',
        end: '2023-09-03 04:00',
      },
    ], */,
  };

  handleDateClick(arg: any) {
    console.log(arg.event.id + ' ' + arg.event.title);
    this.eventClick.emit(arg.event);
  }
}
