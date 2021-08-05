import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

// url = 'https://api.spotify.com/v1';
// token = ;

  constructor(private http:HttpClient) {
  
   }


   getQuery(query:string) {
   const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCLvHYzA0lgNIszOch1PJGtYKISREYxuyEnkwQ9XsdDby8nC3xPkcAQveh3uGaI1Uvw-pJmzspCPL8Lar0'
    });


    return  this.http.get(url, {headers});
    
   }

   getNewRelese(){
     
   return this.getQuery('browse/new-releases').pipe(map(data => {
    return data['albums'].items;
   }));
   }

   getArtistas(termino:string){
  
  
     return this.getQuery(`search?q=${termino}&type=artist&limit=15`) .pipe(map(data => {

      return data['artists'].items;
     }));
   
   }

   getArtista(id:string){

    return this.getQuery(`artists/${id}`);
   }

   getTopTrack(id:string){

    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(map(data => data['tracks']));
   }



}

