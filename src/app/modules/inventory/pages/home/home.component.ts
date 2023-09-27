import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardHomeComponent } from "src/app/modules/admin/components/card-home/card-home.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, CardHomeComponent],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  constructor(private router: Router) {}

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
