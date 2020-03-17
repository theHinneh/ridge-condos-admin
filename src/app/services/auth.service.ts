/** @format */

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService,
    private readonly storageService: StorageService
  ) {}
  // ...
  public isAuthenticated(): boolean {
    const token = this.storageService.getStorage();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
