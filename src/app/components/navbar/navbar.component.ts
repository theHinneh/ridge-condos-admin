/** @format */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { StorageService } from "../../services/storage.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user: any;
  username: string;
  constructor(
    private jwtHelper: JwtHelperService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const token = this.storageService.getStorage();
    this.user = this.jwtHelper.decodeToken(token);
  }

  logout() {
    this.storageService.deleteStorage();
    this.router.navigate(["admin/login"]);
  }
}
