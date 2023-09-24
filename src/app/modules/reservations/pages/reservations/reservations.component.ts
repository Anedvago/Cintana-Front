import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalendarComponent } from "../../components/calendar/calendar.component";
import { ButtonBlueComponent } from "src/app/core/button-blue/button-blue.component";

@Component({
  selector: "app-reservations",
  standalone: true,
  imports: [CommonModule, CalendarComponent, ButtonBlueComponent],
  templateUrl: "./reservations.component.html",
  styleUrls: ["./reservations.component.css"],
})
export class ReservationsComponent {}
