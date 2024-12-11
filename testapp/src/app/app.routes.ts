import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RoomsBookingComponent} from './rooms/rooms-booking/rooms-booking.component';

export const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,
  },
  {
    path: 'rooms', component: RoomsComponent,
  },
  {
    path: 'rooms/:id', component: RoomsBookingComponent
  },
  {
    path: '', redirectTo: '/rooms', pathMatch: 'full',
  },
  {
    path: '**', component: NotfoundComponent,
  }
];
