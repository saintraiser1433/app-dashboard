import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faAlignLeft, faX, faMessage, faBell } from '@fortawesome/free-solid-svg-icons';
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
  faList = faAlignLeft;
  faMessage = faMessage;
  faBell = faBell;
  faX = faX;
  headerService = inject(HeaderService);
  onClick() {
    this.headerService.headerSignal.set(!this.headerService.headerSignal());
  }

}
