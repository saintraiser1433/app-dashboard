import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  headerSignal = signal(true);
  constructor() { }


}
