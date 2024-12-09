import { Routes } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
  {
    path: 'employee', component: EmployeeComponent,
  },
  {
    path: 'rooms', component: RoomsComponent,
  },
  {
    path: '', redirectTo: '/rooms', pathMatch: 'full',
  }
];
