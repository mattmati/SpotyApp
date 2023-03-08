import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
})
export class ArtistaComponent {
  artista: any = {};
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {

    this.loading = true;

    this.router.params.subscribe((params) => {
      //console.log(params['id']);
      this.verArtista(params['id']);
    });
  }

  verArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe((artista) => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }
}
