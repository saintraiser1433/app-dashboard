import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as icon from '@fortawesome/free-solid-svg-icons';
import { SideBarItems } from '@layout/sidebar';
import { TogglemenuDirective } from 'app/shared/directives/togglemenu.directive';
import { HeaderService } from 'app/shared/services/header.service';
@Component({
  selector: 'app-sidebar-items',
  standalone: true,
  imports: [CommonModule, TogglemenuDirective, RouterModule, FontAwesomeModule],
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.css']
})
export class SidebarItemsComponent {
  icon = icon;
  sidebarItems = SideBarItems;
  @Input() isToggle: boolean;
  headerService = inject(HeaderService);
  onClick() {
    this.headerService.headerSignal.set(true);
  }
}
