import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/interfaces/personajes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  @Input() personaje!: Personaje | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
