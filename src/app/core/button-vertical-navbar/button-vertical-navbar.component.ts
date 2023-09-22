import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-button-vertical-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./button-vertical-navbar.component.html",
  styleUrls: ["./button-vertical-navbar.component.css"],
})
export class ButtonVerticalNavbarComponent {
  @Input()
  public btn!: any;
  @Input()
  public index!: number;
  @Output()
  public click: EventEmitter<void> = new EventEmitter<void>();

  public clicked() {
    this.click.emit();
  }
}
