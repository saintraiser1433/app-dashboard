import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faList, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'app/shared/services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  faList = faList;
  faMessage = faMessage;
  faBell = faBell;
  headerService = inject(HeaderService);
  onClick() {
    this.headerService.headerSignal.set(!this.headerService.headerSignal());
  }

}
