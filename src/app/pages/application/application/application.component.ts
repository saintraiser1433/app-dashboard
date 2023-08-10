import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Application } from 'app/core/model/application.interface';
import { AppService } from 'app/core/services/app.service';
@Component({
  selector: 'app-application',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  data: Application[] = [];
  destroyRef = inject(DestroyRef)
  appService = inject(AppService);
  ngOnInit(): void {
    this.loadApplication();
  }


  loadApplication() {
    this.appService.getApplication().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val => {
      this.data = val;
    })
  }
}
