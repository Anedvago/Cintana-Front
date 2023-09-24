import { Component, EventEmitter, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FullCalendarModule } from "@fullcalendar/angular";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CardComponent } from "src/app/core/card/card.component";
import { ButtonBlueComponent } from "src/app/core/button-blue/button-blue.component";
@Component({
  selector: "app-calendar",
  standalone: true,
  imports: [
    CommonModule,
    FullCalendarModule,
    CardComponent,
    ButtonBlueComponent,
  ],
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"],
})
export class CalendarComponent {
  @Output()
  public eventClick: EventEmitter<any> = new EventEmitter<any>();

  public calendarOptions: CalendarOptions = {
    initialView: "dayGridMonth",
    plugins: [dayGridPlugin],
    eventClick: this.handleDateClick.bind(this),
    events: [
      { id: "1", title: "Carlos Gomez / 203", date: "2023-09-01" },
      { id: "2", title: "event 2", date: "2023-09-02" },
    ],
  };

  handleDateClick(arg: any) {
    console.log(arg.event.id + " " + arg.event.title);
    this.eventClick.emit(arg.event);
  }
}
