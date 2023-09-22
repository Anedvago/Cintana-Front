import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoomsComponent } from '../../components/card-rooms/card-rooms.component';
import { CardComponent } from 'src/app/core/card/card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardRoomsComponent, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
