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
}
