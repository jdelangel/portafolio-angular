import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor(private http: HttpClient) {     
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.info = resp;
      this.cargada = true;      
    });
  }

  private cargarEquipo(){
    // this.http.get('assets/data/data-pagina.json')
    this.http.get('https://angular-html-76cc5-default-rtdb.firebaseio.com/Equipo.json')
    .subscribe((resp: any[]) => {      
      this.equipo = resp;      
    });
  }
}
