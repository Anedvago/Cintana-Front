import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/card/card.component';

@Component({
  selector: 'app-card-room',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-room.component.html',
  styleUrls: ['./card-room.component.css'],
})
export class CardRoomComponent {
  @Input()
  public color!: string;
  @Input()
  public textColor!: string;
  @Input()
  public colorAlertState!: string;
  @Input()
  public typeRoom!: string;
  @Input()
  public nameRoom!: string;
}
