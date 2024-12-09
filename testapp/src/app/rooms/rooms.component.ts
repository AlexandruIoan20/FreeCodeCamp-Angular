import { Component, ViewChild } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

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

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  }) // Doar un exemplu

  constructor (
    private roomsService: RoomsService
  ) {

  }

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent

  ngOnInit() {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err)=> console.log(err)
    });

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

     this.roomsService.addRoom(room).subscribe(data => {
          this.roomList = data;
     })
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: 3,
      roomType: "Deluxe Room",
      amenities: "Air Conditioner, Free Wi-Fi, Bathroom, Kitchen",
      price: 1500,
      photos: "https://unsplash.com/photos/a-man-sitting-in-a-chair-in-a-hotel-room-beeCdpiiXRk",
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    }

    this.roomsService.editRoom(room).subscribe(data => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe(data => {
      this.roomList = data;
    })
  }
}
