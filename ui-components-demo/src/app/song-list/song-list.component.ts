import { Component, Input } from '@angular/core';
import { 
  IonList, IonItem, IonLabel, IonNote, IonItemSliding,
  IonItemOptions, IonItemOption, IonIcon, IonReorderGroup,
  IonReorder, IonItemDivider
} from '@ionic/angular/standalone';

interface Song {
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
    IonList, IonItem, IonLabel, IonNote, IonItemSliding,
    IonItemOptions, IonItemOption, IonIcon, IonReorderGroup,
    IonReorder, IonItemDivider
  ]
})
export class SongListComponent {
  @Input() songs: Song[] = [];
  reorderEnabled = false;

  handleReorder(event: any) {
    // Prevent default behavior and handle the reorder
    event.detail.complete(true);
  }

  playSong(song: Song) {
    console.log('Playing:', song.title);
  }

  addToPlaylist(song: Song) {
    console.log('Adding to playlist:', song.title);
  }

  getSongCategories(): string[] {
    const categories = this.songs.map(song => song.category).filter((category, index, self) => category && self.indexOf(category) === index);
    return categories as string[];
  }

  getSongsByCategory(category: string): Song[] {
    return this.songs.filter(song => song.category === category);
  }
}