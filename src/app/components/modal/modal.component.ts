/** @format */

import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  @Input() buttonName: string;
  @Input() modalTitle: string;
  @Input() modalLaunch: string;

  constructor() {}

  ngOnInit() {}
}
