import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms-booking',
  imports: [],
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent {
  constructor(private router: ActivatedRoute) { }

  id: number = 0;

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = this.router.snapshot.params['id'];
    });
  }
}
