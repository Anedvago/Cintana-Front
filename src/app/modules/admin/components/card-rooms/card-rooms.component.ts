import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/card/card.component';

@Component({
  selector: 'app-card-rooms',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-rooms.component.html',
  styleUrls: ['./card-rooms.component.css'],
})
export class CardRoomsComponent {
  @Input()
  public color!: string;
  @Input()
  public textColor!: string;
}
