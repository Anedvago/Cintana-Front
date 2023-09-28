import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoomComponent } from '../../components/card-room/card-room.component';
import { Room } from 'src/app/models/Room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, CardRoomComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  public rooms!: Room[] | null;

  constructor(private roomService: RoomService) {
    this.getAllRooms();
  }

  public getAllRooms() {
    this.roomService.getAllRooms().then((data: Room[] | null) => {
      if (data != null) {
        this.rooms = data.map((data) => {
          return { ...data, state: 'free' };
        });
        this.getRoomsOcuped();
        this.getRoomsReserved();
      }
    });
  }

  public getRoomsOcuped() {
    this.roomService.getRoomsOcuped().then((data) => {
      console.log('Ocuped');
      for (let i = 0; i < data!.length; i++) {
        const idRoom = data![i].room;
        const room = this.rooms!.filter((elem) => elem.id == idRoom);
        room[0].state = 'ocuped';
        console.log(room);
      }
    });
  }

  public getRoomsReserved() {
    this.roomService.getRoomsReserved().then((data) => {
      console.log('Reserved');
      for (let i = 0; i < data!.length; i++) {
        const idRoom = data![i].room;
        const room = this.rooms!.filter((elem) => elem.id == idRoom);
        room[0].state = 'reserved';
        console.log(room);
      }
    });
  }
}
