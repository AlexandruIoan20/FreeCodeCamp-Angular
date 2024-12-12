import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bookings',
  imports: [ CommonModule, ReactiveFormsModule, JsonPipe, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule ],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
})
export class BookingsComponent {
  constructor(private fb: FormBuilder) { }

  bookingForm!: FormGroup;

  ngOnInit() {
    this.bookingForm = this.fb.group({
      roomId: new FormControl(''),
      guestEmail: new FormControl(''),
      checkinDate: new FormControl(''),
      checkoutDate: new FormControl(''),
      bookingStatus: new FormControl(''),
      bookingAmount: new FormControl(''),
      bookingDate: new FormControl(''),
      mobileNumber: new FormControl(''),
      guestName: new FormControl(''),
      guestAddress: new FormControl(''),
      guestCity: new FormControl(''),
      guestState: new FormControl(''),
      guestCountry: new FormControl(''),
      guestZipCode: new FormControl(''),
      guestCount: new FormControl(''),
      //guestList: [],
    })
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
  }
}
