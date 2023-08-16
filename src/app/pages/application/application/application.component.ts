import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { AppService } from 'app/core/services/app.service';
import { DevExtremeModule, DxButtonModule, DxDataGridModule, DxSelectBoxModule } from 'devextreme-angular';
import CustomStore from 'devextreme/data/custom_store';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-application',
  standalone: true,
  imports: [
    CommonModule,
    DevExtremeModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxButtonModule,
    HttpClientModule
  ],
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  customDataSource: CustomStore;
  constructor(http: HttpClient) {
    const isNotEmpty = (value) => value !== undefined && value !== null && value !== '';
    this.customDataSource = new CustomStore({
      key: 'id',
      load(loadOptions: any) {
        let params: HttpParams = new HttpParams();
        [
          'skip',
          'take',
          'requireTotalCount',
          'requireGroupCount',
          'sort',
          'filter',
          'totalSummary',
          'group',
          'groupSummary',
        ].forEach((i) => {
          if (i in loadOptions && isNotEmpty(loadOptions[i])) { params = params.set(i, JSON.stringify(loadOptions[i])); }
        });
        return lastValueFrom(http.get('http://localhost:3000/application', { params }))
          .then((data: any) => ({
            data: data
          }))
          .catch((error) => { throw 'Data Loading Error'; });
      },
      insert: (values) => {
        return lastValueFrom(http.post('http://localhost:3000/application/', values))
          .then(() => { })
          .catch(() => { throw 'Insertion failed' });
      },
      remove: (key) => {
        return lastValueFrom(http.delete('http://localhost:3000/application/' + encodeURIComponent(key)))
          .then(() => { })
          .catch(() => { throw 'Deletion failed'; });
      },
      update: (key, values) => {
        return lastValueFrom(http.patch('http://localhost:3000/application/' + encodeURIComponent(key), values))

          .catch(() => { throw 'Update failed' });
      }
    });
  }



  doneClick() {

  }


  // loadApplication() {
  //   this.appService.getApplication().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(val => {
  //     this.data = val;
  //   })
  // }
}
