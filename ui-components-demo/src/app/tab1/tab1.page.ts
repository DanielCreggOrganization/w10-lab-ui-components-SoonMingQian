import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { AlbumCardComponent } from '../album-card/album-card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, AlbumCardComponent],
})
export class Tab1Page {
  album = {
    title: 'Album Title',
    artist: 'Artist Name',
    coverUrl: 'path/to/cover.jpg',
    year: 2021,
    playCount: 100,
    progress: 0.5
  };
}
