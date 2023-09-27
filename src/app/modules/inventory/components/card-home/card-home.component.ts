import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "src/app/core/card/card.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-card-home",
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: "./card-home.component.html",
  styleUrls: ["./card-home.component.css"],
})
export class CardHomeComponent {
  @Input()
  public img!: string;
  @Input()
  public name!: string;
}
