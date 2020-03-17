/** @format */

import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { BookingForm } from "./form.model";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"]
})
export class BookingComponent implements OnInit {
  title = "Booking Request";
  bookingForm: BookingForm;
  showForm: boolean;
  reservationDate: any;
  exitDate: any;

  loading: boolean;
  toast: boolean;
  toastColor: string;
  toastMessage: string;

  constructor(private readonly apiService: ApiService) {
    this.bookingForm = new BookingForm();
  }
  createReservation() {
    console.log(this.reservationDate.year);
    let { rYear, rMonth, rDay } = this.reservationDate;
    let { eYear, eMonth, eDay } = this.exitDate;
    this.bookingForm.reservationDate = `${rYear}-${rMonth}-${rDay}`.toString();
    this.bookingForm.exitDate = `${eYear}-${eMonth}-${eDay}`.toString();

    console.log(this.bookingForm);

    // this.apiService.createReservation(this.bookingForm).subscribe(res => {
    //   console.log(res);
    // });
  }

  ngOnInit() {}
}
