import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JugadorService } from 'src/app/Services/jugador.service';
import { UsuariosService } from 'src/app/Services/usuarios.service';

import { JugadorInterface } from 'src/app/Models/jugadorInterface';
import { UsuarioInterface } from 'src/app/Models/usuarioInterface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  usuario: UsuarioInterface;
  
  datosJugadores: JugadorInterface[] = [];

  constructor(public jugadorService: JugadorService, private usuarioService: UsuariosService, public router: Router) { }

  Volver(): void {
    this.router.navigate(['login']);
  }
  
  ngOnInit(): void {
    this.ObtenerJugadores();
    this.ObtenerDatosUsuarioLoggeado();
  }

  ObtenerDatosUsuarioLoggeado(){
    this.usuario = this.usuarioService.getUsuarioActual();
  }

  ObtenerJugadores(){
    this.jugadorService.CargarDatos().subscribe(async (res) =>
    {
      let datos: any = res;
      this.datosJugadores = datos;
      //console.log("LISTADO DE JUGADORES: ");
      //console.log(this.datosJugadores);
    },
    err => console.log(err));
  }

}
