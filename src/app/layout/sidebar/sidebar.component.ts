import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarItemsComponent } from '@layout/sidebar-items/sidebar-items.component';
import { TogglemenuDirective } from 'app/shared/directives/togglemenu.directive';
import { HeaderService } from 'app/shared/services/header.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemsComponent, FontAwesomeModule, TogglemenuDirective],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  headerService = inject(HeaderService);
  toggleSide = computed(() => this.headerService.headerSignal());

}
