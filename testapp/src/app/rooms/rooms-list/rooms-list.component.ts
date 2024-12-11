import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomList } from '../rooms';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Input() title: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList> ();

  ngOnChanges (changes: SimpleChanges) {
      console.log(changes);
      if(changes['title']) {
        this.title = changes['title'].currentValue.toUpperCase();
      }
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
