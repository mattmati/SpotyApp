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
      // 'Authorization' : 'Bearer BQCsbIOnQs1McDchEyfx7IS4LU4Ck3Rg0xtEKbP6BmNpDCZXk40NoufQz9myjHHHSDPYseCqSV-p4d6orIeYXgtcDPjgejySFiYM9K-2yfRk-P_8VpWl'

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
                
   }

   getTopTracks( id : string ){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
              .pipe( map( (data:any) => data['tracks']));
   }
}
