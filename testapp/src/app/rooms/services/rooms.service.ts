import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
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

  constructor() { }

  getRooms() {
    return this.roomList;
  }
}
