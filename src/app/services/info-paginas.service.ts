import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginasService {

  info: InfoPagina = {};
  cargada = false;

  constructor(private http: HttpClient) { 
    //console.log('Servicio de info pagina listo');
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      this.info = resp;
      this.cargada = true;

      console.log(this.info);
    });

  }
}
