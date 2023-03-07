import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log("spotify service lito!");
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBVfcZcWYV2RkS1TRcfPNi5IXmzZTQlstFrkwV53dalsk1GZNr8jqnXUS_3csrAFObo6FMS1zwDJqKvnIj5ks1kAQg0L6aZLjp5WIEMGIc4b4s3OqyG'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

   }

   getArtista( termino : string ){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBVfcZcWYV2RkS1TRcfPNi5IXmzZTQlstFrkwV53dalsk1GZNr8jqnXUS_3csrAFObo6FMS1zwDJqKvnIj5ks1kAQg0L6aZLjp5WIEMGIc4b4s3OqyG'

    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
   }
}
