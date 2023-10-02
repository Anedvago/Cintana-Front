import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../../services/articles.service';
import { TableComponent } from 'src/app/core/table/table.component';
import { FormDocumentsComponent } from '../../components/form-documents/form-documents.component';

@Component({
  selector: 'app-purchases',
  standalone: true,
  imports: [CommonModule, FormDocumentsComponent, TableComponent],
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css'],
})
export class PurchasesComponent {
  public columns = [
    'Cod',
    'Ref',
    'Nombre',
    'Precio',
    'Stock',
    'Dpto',
    'Seccion',
    'Familia',
  ];

  public rows: any[] = [];

  constructor(private articlesService: ArticlesService) {
    this.getArticles();
  }

  public getArticles() {
    this.articlesService.getAllArticles().then((data: any) => {
      this.rows = data.map((item: any) => [
        item.id,
        item.ref,
        item.name,
        item.value,
        item.stock,
        item.dpto,
        item.section,
        item.family,
      ]);
      console.log(this.rows);
    });
  }
}
