import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglemenuDirective } from 'app/shared/directives/togglemenu.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQrcode, faHome, faChevronDown, faUser, faCogs } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'app/shared/services/header.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, TogglemenuDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  faQrcode = faQrcode;
  faHome = faHome;
  faChevronDown = faChevronDown;
  faUser = faUser;
  faCogs = faCogs;
  headerService = inject(HeaderService);
  

}
