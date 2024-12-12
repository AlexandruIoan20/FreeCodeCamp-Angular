import { Routes } from '@angular/router';
import {NotfoundComponent} from './notfound/notfound.component';

export const routes: Routes = [
  {
    path: 'employee',
    loadComponent: () => import('./employee/employee.component').then(m => m.EmployeeComponent)
  },
  {
    path: 'bookings',
    loadComponent: () => import('./bookings/bookings.component').then(m => m.BookingsComponent),
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
