import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('mModal') mModal: ElementRef<HTMLDivElement>;
  title = 'demo-modal-swipe-up';

  onSwipeDown() {
    this.mModal.nativeElement.classList.remove('show');
  }

  openModal() {
    this.mModal.nativeElement.classList.add('show');
  }
}
