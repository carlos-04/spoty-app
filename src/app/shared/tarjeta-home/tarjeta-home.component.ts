import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-home',
  templateUrl: './tarjeta-home.component.html',
  styleUrls: ['./tarjeta-home.component.css']
})
export class TarjetaHomeComponent implements OnInit {
 
  @Input() items:any = {};
  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }


  verArtista(item:any){

let artistaId;

if(item.type === 'artist'){

  artistaId = item.id;

}else {

  artistaId = item.artists[0].id;

}

this.ruta.navigate(['/artista', artistaId])
console.log(artistaId);

  }
}
