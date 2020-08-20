import { Component, OnInit, Input } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private sidenavService: SidenavService) {
  }

  ngOnInit(): void {
  }

  toggleSidenav() {
    return this.sidenavService.sidenavToggled;
  }

}
