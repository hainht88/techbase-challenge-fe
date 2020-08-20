import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  _sidenavToggled = false;

  constructor() { }

  toggledSidenav() {
    this._sidenavToggled = !this._sidenavToggled;
  }

  get sidenavToggled() {
    return this._sidenavToggled;
  }
}
