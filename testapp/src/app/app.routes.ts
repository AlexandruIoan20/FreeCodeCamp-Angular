import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {RoomsBookingComponent} from './rooms/rooms-booking/rooms-booking.component';

export const routes: Routes = [
  {
    path: 'employee',
    loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent)
  },
  {
    path: 'rooms',
    loadComponent: () => import('./rooms/rooms.component').then(m => m.RoomsComponent),
  },
  {
    path: 'rooms/:id',
    loadComponent: () => import('./rooms/rooms-booking/rooms-booking.component').then(m => m.RoomsBookingComponent),
  },
  {
    path: '', redirectTo: '/rooms', pathMatch: 'full',
  },
  {
    path: '**', component: NotfoundComponent,
  }
];
