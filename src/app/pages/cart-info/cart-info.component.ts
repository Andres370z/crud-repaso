import { Component, OnInit } from '@angular/core';
import { Episodes, Personaje } from 'src/app/interfaces/personajes';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {
  episodes: Episodes | any;
  episodes2: Episodes [] | any;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
    this.getEpisodes();
  }

  getEpisodes() {
    this.httpService.getEpisodes().subscribe((res: Episodes) => {
      this.episodes = res;
      this.episodes2 = res;
      console.log('Episodios ', this.episodes);
    })
  }
  filter(e: any){
    const value = e.target?.value;
    console.log(value);
    
    this.episodes = this.episodes2?.filter(({name}: Episodes)=>{
      return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
  }

  getAllCharacters(){
    this.httpService.getCharacters().subscribe((res: Personaje)=>{
      console.log('desde el servicio ---> ', res);
      
    })
  }
  

}
