import { Component, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-modal",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  @Output()
  public close: EventEmitter<void> = new EventEmitter<void>();

  public closeModal() {
    this.close.emit();
  }
}
