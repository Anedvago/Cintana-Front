import { Component, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-button-blue",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button-blue.component.html",
  styleUrls: ["./button-blue.component.css"],
})
export class ButtonBlueComponent {
  @Output()
  public event: EventEmitter<void> = new EventEmitter<void>();

  public click() {
    this.event.emit();
  }
}
