import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderService } from 'app/shared/services/header.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  headerService = inject(HeaderService);

  toggleSide = computed(() => this.headerService.headerSignal());
}
