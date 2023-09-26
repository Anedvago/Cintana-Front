import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from '@angular/core';
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
export class CalendarComponent implements OnChanges {
  @Output()
  public eventClick: EventEmitter<number> = new EventEmitter<number>();
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
  };

  ngOnChanges() {
    this.calendarOptions.events = this.eventsBooking;
  }

  handleDateClick(arg: any) {
    this.eventClick.emit(arg.event.id);
  }
}
