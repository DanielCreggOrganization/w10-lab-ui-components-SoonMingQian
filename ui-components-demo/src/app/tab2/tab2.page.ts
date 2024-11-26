// tab2.page.ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { SongListComponent } from '../song-list/song-list.component';
import { SongDetailsModalComponent } from '../song-details-modal/song-details-modal.component';

interface Song {
  title: string;
  artist: string;
  duration: string;
  category?: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    ExploreContainerComponent, SongListComponent,
    SongDetailsModalComponent
  ]
})
export class Tab2Page {
  isModalOpen = false;
  selectedSong: Song | null = null;
  
  songList = [
    { title: 'Song 1', artist: 'Artist 1', duration: '3:45', category: 'Pop' },
    { title: 'Song 2', artist: 'Artist 2', duration: '4:20', category: 'Rock' },
    { title: 'Song 3', artist: 'Artist 3', duration: '2:30', category: 'Jazz' },
    { title: 'Song 4', artist: 'Artist 4', duration: '5:00', category: 'Pop' },
    { title: 'Song 5', artist: 'Artist 5', duration: '3:15', category: 'Rock' }
  ];

  handleSongSelect(song: Song) {  // Updated method name and type
    this.selectedSong = song;
    this.isModalOpen = true;
  }
}