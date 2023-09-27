import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormDocumentsComponent } from "../../components/form-documents/form-documents.component";
import { TableComponent } from "src/app/core/table/table.component";
import { ServicesService } from "../../services/services.service";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule, FormDocumentsComponent, TableComponent],
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent {
  public columns = ["Cod", "Nombre", "Precio", "Dpto", "Seccion", "Familia"];

  public rows: any[] = [];

  constructor(private servicesService: ServicesService) {
    this.getArticles();
  }

  public getArticles() {
    this.servicesService.getAllServices().then((data: any) => {
      this.rows = data.map((item: any) => [
        item.id,
        item.name,
        item.value,
        item.dpto,
        item.section,
        item.family,
      ]);
      console.log(this.rows);
    });
  }
}
