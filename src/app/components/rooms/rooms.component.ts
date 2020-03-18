/** @format */
import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../services/api.service";
import { NewRoom } from "./form.model";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"]
})
export class RoomsComponent implements OnInit {
  title = "Rooms";
  modalLaunch = "Add Room";
  modalTitle = "New Room";

  loading: boolean;
  toast: boolean;
  toastColor: string;
  toastMessage: string;
  response: any;

  noRooms: boolean;
  errorMessage: string;
  loader: boolean;

  public roomForm: NewRoom;
  functionCall: string;
  roomId: number;

  constructor(private readonly apiService: ApiService) {
    this.roomForm = new NewRoom();
  }

  getRooms() {
    this.apiService.getRooms().subscribe(
      res => {
        // console.log(res);
        this.response = res;
        this.loader = true;
        if (this.response.length === 0) {
          this.loader = false;
          this.errorMessage = "Sorry, no rooms available";
          this.noRooms = true;
        }
        this.noRooms = false;
        this.loader = false;
        // console.log(this.response);
      },
      error => {
        this.toastMessage = "Sorry, no rooms available";
        this.noRooms = true;
        this.loader = false;
      }
    );
  }

  createRoom() {
    const api = this.apiService.createRoom(this.roomForm);
    this.submitForm(api);
  }

  updateRoom() {
    const api = this.apiService.updateRoom(this.roomId, this.roomForm);
    this.submitForm(api);
  }

  deleteRoom(room: any) {
    return this.apiService.deleteRoom(room.id).subscribe(
      res => {
        this.getRooms();
      },
      error => (this.toastMessage = error.message)
    );
  }

  submitForm(api) {
    this.loading = true;
    api.subscribe(
      res => {
        if (res) {
          // console.log(res);
          this.loading = false;
          this.roomForm = new NewRoom();
          this.toast = true;
          this.toastColor = "green";
          this.toastMessage = "Submitted successfully";

          this.functionCall === "update" ? "" : this.getRooms();
        }
      },
      error => {
        this.loading = false;
        this.roomForm = new NewRoom();
        this.toast = true;
        this.toastColor = "red";
        this.toastMessage = "Failed to Submit. Please try again";
      }
    );
  }

  submitOption() {
    this.functionCall === "create" ? this.createRoom() : this.updateRoom();
  }

  triggerModal(room) {
    this.functionCall = "update";
    let element: HTMLElement = document.getElementById(
      "modal-btn"
    ) as HTMLElement;
    // console.log(element);
    element.click();
    this.roomForm = room;
    this.roomId = room.id;
  }

  ngOnInit() {
    this.loading = false;
    this.toast = false;
    this.getRooms();
  }
}
