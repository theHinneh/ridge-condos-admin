/** @format */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}
  setStorage(token: any) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getStorage() {
    return localStorage.getItem('token');
  }

  deleteStorage() {
    localStorage.removeItem('token');
  }
}
