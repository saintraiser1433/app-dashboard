import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTogglemenu]',
  standalone: true
})
export class TogglemenuDirective {
  @Input() targetId: string;
  @Input() chevid: string;
  constructor() { }

  @HostListener('click') onClick() {
    if (this.targetId) {
      const targetMenu = document.getElementById(this.targetId);
      const chevron = document.getElementById('c' + this.targetId);
      if (targetMenu) {
        targetMenu.classList.toggle('hidden');
        chevron.classList.toggle('rotate-90');
      }
    }
  }

}
