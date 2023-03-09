import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  newAlbums: any[] = [];
  loading: boolean;
  error: Boolean;
  msjError: string;

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.msjError = '';

    this.spotify.getNewReleases().subscribe(
      (data) => {
        // console.log(data);
        this.newAlbums = data;
        this.loading = false;
      },
      (errorService) => {
        this.loading = false;
        this.error = true;
        console.log(errorService);
        this.msjError = errorService.error.error.message;
      }
    );
  }
}
