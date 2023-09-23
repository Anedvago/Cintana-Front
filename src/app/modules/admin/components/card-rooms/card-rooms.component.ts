import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "src/app/core/card/card.component";

@Component({
  selector: "app-card-rooms",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./card-rooms.component.html",
  styleUrls: ["./card-rooms.component.css"],
})
export class CardRoomsComponent implements OnChanges {
  @Input()
  public color!: string;
  @Input()
  public textColor!: string;
  @Input()
  public colorProgressBar!: string;
  @Input()
  public numRooms!: number;

  public totalNumberRooms: number = 10;
  public porcent: number = (this.numRooms * 100) / this.totalNumberRooms;

  ngOnChanges(changes: SimpleChanges): void {
    this.porcent = (this.numRooms * 100) / this.totalNumberRooms;
  }
}
