import { Component } from '@angular/core';
import { Room } from './rooms';
import { CommonModule } from '@angular/common';
import { RoomList } from './rooms';
import { RoomsListComponent } from "./rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, RoomsListComponent],
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

  ngOnInit() { 
    this.roomList = [ 
      { 
        roomNumber: 1, 
        roomType: "Deluxe Room", 
        amenities: "Air Conditioner, Free Wi-Fi, Bathroom, Kitchen", 
        price: 500, 
        photos: "https://unsplash.com/photos/a-man-sitting-in-a-chair-in-a-hotel-room-beeCdpiiXRk", 
        checkinTime: new Date('11-Nov-2021'), 
        checkoutTime: new Date('12-Nov-2021'), 
      },
      { 
        roomNumber: 2, 
        roomType: "Deluxe Room", 
        amenities: "Air Conditioner, Free Wi-Fi, Bathroom, Kitchen", 
        price: 1000, 
        photos: "https://unsplash.com/photos/a-man-sitting-in-a-chair-in-a-hotel-room-beeCdpiiXRk", 
        checkinTime: new Date('11-Nov-2021'), 
        checkoutTime: new Date('12-Nov-2021'), 
      },
      { 
        roomNumber: 3, 
        roomType: "Private Suite", 
        amenities: "Air Conditioner, Free Wi-Fi, Bathroom, Kitchen", 
        price: 1500, 
        photos: "https://unsplash.com/photos/a-man-sitting-in-a-chair-in-a-hotel-room-beeCdpiiXRk", 
        checkinTime: new Date('11-Nov-2021'), 
        checkoutTime: new Date('12-Nov-2021'), 
      },
    ]
  }

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
