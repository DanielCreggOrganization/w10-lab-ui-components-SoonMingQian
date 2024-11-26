// song-list.component.ts
import { Component, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonList, IonItem, IonLabel, IonNote, IonItemSliding,
  IonItemOptions, IonItemOption, IonIcon, IonReorderGroup,
  IonReorder, IonItemDivider
} from '@ionic/angular/standalone';

export interface Song {
  title: string;
  artist: string;
  duration: string;
  category?: string;
}

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonList, IonItem, IonLabel, IonNote, IonItemSliding,
    IonItemOptions, IonItemOption, IonIcon, IonReorderGroup,
    IonReorder, IonItemDivider
  ]
})
export class SongListComponent {
  @Input() songs: Song[] = [];
  @Output() songSelect = new EventEmitter<Song>();
  reorderEnabled = false;

  getSongCategories(): string[] {
    return [...new Set(this.songs.map(song => song.category || 'Uncategorized'))];
  }

  getSongsByCategory(category: string): Song[] {
    return this.songs.filter(song => song.category === category);
  }

  handleReorder(event: any) {
    event.detail.complete(true);
  }

  playSong(song: Song) {
    this.songSelect.emit(song);
  }

  addToPlaylist(song: Song) {
    console.log('Adding to playlist:', song.title);
  }
}

function Output(): (target: SongListComponent, propertyKey: "songSelect") => void {
  throw new Error('Function not implemented.');
}
