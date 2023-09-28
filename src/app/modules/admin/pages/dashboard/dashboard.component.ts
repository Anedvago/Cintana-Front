import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoomsComponent } from '../../components/card-rooms/card-rooms.component';
import { CardComponent } from 'src/app/core/card/card.component';
import { TableComponent } from 'src/app/core/table/table.component';
import { VerticalBarComponent } from '../../components/vertical-bar/vertical-bar.component';
import { RoomService } from 'src/app/services/room.service';
import { ArticleService } from 'src/app/services/article.service';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardRoomsComponent,
    CardComponent,
    TableComponent,
    VerticalBarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  columnsInd: string[] = ['Nombre Cliente', 'Estado', 'Habitacion'];
  rowsInd: any[][] = [];

  public totalRooms: number = 0;
  public reservedRooms: number = 0;
  public freeRooms: number = 0;
  public ocupedRooms: number = 0;
  public columnsStock = ['Articulo', 'Estado', 'Stock'];
  public rowsStock: any[] = [];

  constructor(
    private roomService: RoomService,
    private articleService: ArticleService,
    private clientService: ClientService
  ) {
    this.setCardRooms();
    this.getArticlesWithLowStock();
    this.getClientsReserved();
    this.getClientsOcuped();
  }

  public setCardRooms() {
    this.roomService.getAllRooms().then((data) => {
      this.totalRooms = data!.length;
      this.roomService.getRoomsReserved().then((data) => {
        this.reservedRooms = data!.length;
        this.roomService.getRoomsOcuped().then((data) => {
          this.ocupedRooms = data!.length;
          this.freeRooms =
            this.totalRooms - this.reservedRooms - this.ocupedRooms;
        });
      });
    });
  }

  public getArticlesWithLowStock() {
    this.articleService.getArticlesWithLowStock().then((data) => {
      this.rowsStock = data!.map((item: any) => [
        item.name,
        item.stock == 0 ? 'Agotado' : 'Por Agotar',
        item.stock,
      ]);
    });
  }

  public getClientsReserved() {
    this.clientService.getClientsReserved().then((data) => {
      console.log(data);
      const arr = data!.map((item: any) => [
        item.Customers.name,
        'Reserva',
        item.Rooms.name,
      ]);
      arr.forEach((elem) => {
        this.rowsInd.push(elem);
      });
    });
  }
  public getClientsOcuped() {
    this.clientService.getClientsOcuped().then((data) => {
      const arr = data!.map((item: any) => [
        item.Customers.name,
        'Ocupado',
        item.Rooms.name,
      ]);
      arr.forEach((elem) => {
        this.rowsInd.push(elem);
      });
    });
  }
}
