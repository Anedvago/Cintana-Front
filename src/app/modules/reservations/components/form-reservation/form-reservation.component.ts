import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/core/input/input.component';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { Reservation } from 'src/app/models/Reservation';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-reservation',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonBlueComponent, FormsModule],
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css'],
})
export class FormReservationComponent implements OnChanges {
  @Input()
  public reservation!: Reservation;

  public typeIdentification?: string;

  constructor() {}
  ngOnChanges() {
    console.log(this.reservation.Customers.typeIdentification);
    this.typeIdentification = this.reservation.Customers.typeIdentification;
  }
}
