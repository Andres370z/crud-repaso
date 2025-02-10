import { Component, Input, OnInit } from '@angular/core';
import { FuturamaCharacters } from 'src/app/interfacesTwo/personajes';

@Component({
  selector: 'app-fut-cart-info',
  templateUrl: './fut-cart-info.component.html',
  styleUrls: ['./fut-cart-info.component.scss']
})
export class FutCartInfoComponent implements OnInit {

  @Input() character!: FuturamaCharacters | undefined
  constructor() { }
  
  ngOnInit(): void {
  }

}
