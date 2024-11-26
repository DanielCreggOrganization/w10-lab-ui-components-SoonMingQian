import { Component, Input } from '@angular/core';
import {
  IonModal, IonHeader, IonToolbar, IonTitle, IonButtons,
  IonButton, IonContent, IonIcon
} from '@ionic/angular/standalone';
import { trigger, transition, style, animate } from '@angular/animations';
import { Song } from '../song-list/song-list.component';
@Component({
  selector: 'app-song-details-modal',
  templateUrl: './song-details-modal.component.html',
  styleUrls: ['./song-details-modal.component.scss'],
  standalone: true,
  imports: [
    IonModal, IonHeader, IonToolbar, IonTitle, IonButtons,
    IonButton, IonContent, IonIcon
  ],
  animations: [
    trigger('modalAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class SongDetailsModalComponent {
  @Input() isOpen = false;
  @Input() song: Song | null = null;
  presentingElement: HTMLElement | null = null;

  constructor() {
    this.presentingElement = document.querySelector('.ion-page');
  }

  onWillPresent() {
    console.log('Modal will present');
  }

  onDidDismiss() {
    console.log('Modal dismissed');
    this.isOpen = false;
  }
}