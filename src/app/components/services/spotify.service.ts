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
      'Authorization' : 'Bearer BQBmKxPQ4ODkNJUsO6ZxP0E12KNI8UJVujU5pRC82VM2H53cBI3hnvO3WHmI_iMlO5ev3Jf8Pb2b0zEqyVQkRkqNKECOlqNub7vkoFy19gw2VuYrcA8J'

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
