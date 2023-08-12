import { Component, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from 'app/shared/services/header.service';
import { SidebarItemsComponent } from '@layout/sidebar-items/sidebar-items.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarItemsComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  headerService = inject(HeaderService);


}
