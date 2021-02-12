import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interfaces';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute,
    private _productoService: ProductosService) 
  {

  }

  ngOnInit(): void {
    this.route.params
    .subscribe(params => 
      {
        console.log(params["id"]);
        
        this._productoService.getProducto(params["id"])
        .subscribe((prod : ProductoDescripcion) => 
          {
            console.log(prod);
            
            this.id = params["id"];
            this.producto = prod;            
            
          });
      });      
  }

}
