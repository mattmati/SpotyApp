import { Component } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ){ this.loading = false; }

  buscar(termino: string){
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas( termino )
        .subscribe( data => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        } );
  }

}
