import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardRoomsComponent } from "../../components/card-rooms/card-rooms.component";
import { CardComponent } from "src/app/core/card/card.component";
import { TableComponent } from "src/app/core/table/table.component";
import { VerticalBarComponent } from "../../components/vertical-bar/vertical-bar.component";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    CardRoomsComponent,
    CardComponent,
    TableComponent,
    VerticalBarComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent {
  columnsInd: string[] = ["Nombre Cliente", "Estado", "Habitacion"];
  rowsInd: string[][] = [
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
    ["Carlos Gomez", "Ocupado", "101"],
    ["Pedro Corrales", "Reservado", "103"],
    ["Oscar Rios", "Reservado", "107"],
  ];
  columsStock: string[] = ["Articulo", "Estado", "Stock"];
  rowsStock: string[][] = [
    ["Toallas", "por agotar", "10"],
    ["Almohadas", "por agotar", "5"],
    ["Shampoo", "por agotar", "3"],
    ["Toallas", "agotado", "0"],
    ["Almohadas", "por agotar", "2"],
    ["Sábanas", "agotado", "0"],
  ];
}
