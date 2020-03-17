/** @format */

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private baseUrl = "https://ridge-app.herokuapp.com/";

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: StorageService
  ) {}

  private getToken() {
    let token = this.storageService.getStorage();
    token != null ? (token = token.slice(1, -1)) : (token = "");
    return token;
  }

  private httpHeaders = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("X-Frame-Options", "SAMEORIGIN")
    .set("Access-Control-Allow-Origin", "*")
    .set(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization,"
    )
    .set("Authorization", "Bearer " + this.getToken());

  private readonly options = {
    headers: this.httpHeaders
  };

  login(data: any) {
    return this.http.post(`${this.baseUrl}auth/signin`, data);
  }
  createRoom(data) {
    return this.http.post(
      `${this.baseUrl}rooms-management`,
      data,
      this.options
    );
  }
  getRooms() {
    return this.http.get(`${this.baseUrl}rooms-management`, this.options);
  }

  deleteRoom(id) {
    return this.http.delete(
      `${this.baseUrl}rooms-management/${id}`,
      this.options
    );
  }

  updateRoom(id, data) {
    return this.http.patch(
      `${this.baseUrl}rooms-management/${id}`,
      data,
      this.options
    );
  }

  createReservation(data) {
    return this.http.get(`${this.baseUrl}reservation`, this.options);
  }

  deleteReservation(id) {
    return this.http.delete(`${this.baseUrl}reservation${id}`, this.options);
  }

  updateReservation(id, data) {
    return this.http.patch(
      `${this.baseUrl}reservation${id}`,
      data,
      this.options
    );
  }
}
