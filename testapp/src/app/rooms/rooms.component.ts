import { Component, ViewChild } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName = "Hilton Hotel";
  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];
  title='Room List';

  // roomService = new RoomsService(); - X

  constructor (
    private roomsService: RoomsService
  ) {

  }

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent

  ngOnInit() {
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
      console.log(this.roomList);
    });
  };

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    console.log(room);
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, Bathroom, Kitchen",
      price: 1500,
      photos: "https://unsplash.com/photos/a-man-sitting-in-a-chair-in-a-hotel-room-beeCdpiiXRk",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
     }

    this.roomList = [...this.roomList, room];
  }
}
