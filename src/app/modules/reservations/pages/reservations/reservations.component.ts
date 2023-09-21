import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from 'src/app/core/desktop-layout/desktop-layout.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, DesktopLayoutComponent],
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
})
export class ReservationsComponent {}
