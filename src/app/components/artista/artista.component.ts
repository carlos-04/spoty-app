import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  loading:boolean;
  artista:any ={};
  topTrack: any[] = [];
  constructor(private _activateRouter:ActivatedRoute,
              private serviceSpoty:SpotifyService) {
                this.loading = true;
    this._activateRouter.params.subscribe(params => {

     this.getArtista(params['id']);
     this.getToptrack(params['id']);
      
    })
   }


   getArtista (id:string){

    
this.loading = true;
    this.serviceSpoty.getArtista(id).subscribe (artista => {

      this.artista = artista;

      this.loading = false;
    })

   }


   getToptrack(id:string){

    this.serviceSpoty.getTopTrack(id).subscribe((topTracks:any) => {

      console.log(this.topTrack = topTracks);
      this.topTrack = topTracks;
    })
   }



  ngOnInit(): void {
  }



}
