import { Component, Input } from '@angular/core';
import { 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonButton, IonIcon, IonBadge, IonProgressBar 
} from '@ionic/angular/standalone';

interface Album {
  title: string;
  artist: string;
  coverUrl: string;
  year: number;
  playCount?: number;
  progress?: number;
}
@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonBadge, IonProgressBar]
})
export class AlbumCardComponent {
  @Input() album!: Album;
  @Input() featured = false;
  constructor() { }

}
