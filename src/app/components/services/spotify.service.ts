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
      'Authorization' : 'Bearer BQCMvy0dcARgXp7x9RKwy_1YAXb2G4Mu8UgBF0MAVyyAARY7osdbnzghxgI0vRv1F2O_05Ubj_iuTJ_1M8xANw9jNlkpzJGIQy6nGleH07FKozie_Wu-'

    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

   }
}
