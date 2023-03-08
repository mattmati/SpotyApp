import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("spotify service lito!");
   }

   getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAypeRmgPb4YYi4AFJFsw_eEMV7PaN4zVLMYYUkIO6vqPVPLZYBCEtyZLpUcRCsm5HYg7Aa45-Oi_aQgKL9hf3sYzdhnOtuIC1jcM94WmaBN1IwKq3c'

    });

    return this.http.get( url, { headers });

  }

   getNewReleases(){

       return this.getQuery('browse/new-releases')
                  .pipe( map( (data:any) => data['albums'].items));      

   }

   getArtista( termino : string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data:any) => data['artists'].items));
   }
}
