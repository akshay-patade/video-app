import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  mobileOptions: boolean = false;

  showMobileOptions() {

    this.mobileOptions = !this.mobileOptions;
  }

}
