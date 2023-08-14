import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fonts from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from 'app/shared/services/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icons = fonts;
  headerService = inject(HeaderService);
  onClick() {
    this.headerService.headerSignal.set(!this.headerService.headerSignal());
  }
  toggleSide = computed(() => this.headerService.headerSignal());


}
