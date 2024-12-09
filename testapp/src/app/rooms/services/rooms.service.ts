import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  constructor(
    private http: HttpClient
  ) { }

  getRooms() {
    return this.http.get<RoomList[]>('/api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post<RoomList[]>("/api/rooms", room);
  }

  editRoom(room: RoomList) {
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  delete(id: string) {
    return this.http.delete<RoomList []>(`/api/rooms/${id}`);
  }
}
