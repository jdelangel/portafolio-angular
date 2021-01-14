import { Component, OnInit } from '@angular/core';
import { InfoPaginasService } from 'src/app/services/info-paginas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public  _info: InfoPaginasService ) { }

  ngOnInit(): void {
  }

}
