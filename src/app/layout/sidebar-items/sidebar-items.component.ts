import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faQrcode, faHome, faChevronDown, faUser, faCogs, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TogglemenuDirective } from 'app/shared/directives/togglemenu.directive';

@Component({
  selector: 'app-sidebar-items',
  standalone: true,
  imports: [CommonModule, TogglemenuDirective, FontAwesomeModule],
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent {
  faQrcode = faQrcode;
  faHome = faHome;
  faChevronDown = faChevronDown;
  faUser = faUser;
  faCogs = faCogs;
  faList = faList;
  @Input() isToggle: boolean;
}
