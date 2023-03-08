import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newAlbums: any[] = [];

  constructor( private spotify:SpotifyService ){

    this.spotify.getNewReleases()
        .subscribe( data => {
          console.log(data);
          this.newAlbums = data;

        });

  }

}
