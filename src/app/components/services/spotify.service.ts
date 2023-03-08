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
      // 'Authorization' : 'Bearer BQB0YlKYrV6lX5waj-cbSXhg8cYaclxedPgyUmkf-RU3LFOFqFZdzj1TscP9DiQ7Z54ud2rSiQGQ7PTStXL1CbizE-p79jy1diiOJjZlAPvbdMyj553n'

    });

    return this.http.get( url, { headers });

  }

   getNewReleases(){

       return this.getQuery('browse/new-releases')
                  .pipe( map( (data:any) => data['albums'].items));      

   }

   getArtistas( termino : string ){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data:any) => data['artists'].items));
   }


   getArtista( id : string ){

    return this.getQuery(`artists/${ id }`);
                // .pipe( map( (data:any) => data['artists'].items));
   }
}
