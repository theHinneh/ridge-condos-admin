/** @format */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showError: boolean;
  loadingOrSubmit: string;
  constructor(
    private readonly apiService: ApiService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}
  apiResponse: any;

  ngOnInit() {
    this.loadingOrSubmit = 'Login';
  }

  onSubmit(f) {
    this.showError = false;
    this.loadingOrSubmit = 'Loading...';
    this.apiService.login(f.value).subscribe(
      res => {
        if (res) {
          this.apiResponse = res;
          this.storageService.setStorage(this.apiResponse.accessToken);
          // console.log(res);
          this.loadingOrSubmit = 'Login';
          this.router.navigate(['dashboard']);
        }
      },
      error => {
        this.showError = true;
        this.loadingOrSubmit = 'Login';
      }
    );
  }
}
