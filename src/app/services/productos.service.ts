import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[];

  constructor(private http: HttpClient)   
  {
    this.cargarProductos();
  }

  private cargarProductos()
  {
    this.http.get('https://angular-html-76cc5-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp :ProductoInterface[]) =>
      {
          console.log(resp);
          this.productos = resp;
          

          setTimeout(() => {
            this.cargando = false;
          },2000);
      });
  }
}
