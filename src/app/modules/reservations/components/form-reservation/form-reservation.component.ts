import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/core/input/input.component';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';

@Component({
  selector: 'app-form-reservation',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonBlueComponent],
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css'],
})
export class FormReservationComponent {}