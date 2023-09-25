import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoomComponent } from '../../components/card-room/card-room.component';
import { RoomService } from '../../services/room.service';
import { Room } from 'src/app/models/Room';

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
        this.rooms = data;
      }
    });
  }
}
