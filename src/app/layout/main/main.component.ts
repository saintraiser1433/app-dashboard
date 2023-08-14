import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from '@layout/footer/footer.component';
import { HeaderComponent } from '@layout/header/header.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { HeaderService } from 'app/shared/services/header.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent, FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  icon = icon;
  headerService = inject(HeaderService);
  toggleSide = computed(() => this.headerService.headerSignal());
}
