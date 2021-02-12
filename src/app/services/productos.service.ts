import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: ProductoInterface[];
  productosFiltrados: ProductoInterface[];

  constructor(private http: HttpClient)   
  {
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-76cc5-default-rtdb.firebaseio.com/productos_idx.json')
          .subscribe((resp :ProductoInterface[]) =>
          {          
            this.productos = resp;                    
            this.cargando = false;                    
            resolve();
          });
      });
  }

  getProducto(id: string){
    return this.http.get(`https://angular-html-76cc5-default-rtdb.firebaseio.com/productos/${ id }.json`);    
  }

  buscarProducto(termino: string){    
    if(this.productos == undefined || this.productos.length === 0){
      this.cargarProductos().then(()=>{    
        //se ejecuta despues de obtener productos
        this.filtrarProductos(termino);
      });
    }
    else{      
      this.filtrarProductos(termino);      
    }
  }

  filtrarProductos(termino: string){
    console.log(this.productos);    
    this.productosFiltrados = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod =>{
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if(prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrados.push(prod);
      }      
    });
  }
}
