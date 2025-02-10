import { Component, OnInit } from '@angular/core';
import { FuturamaCharacters } from 'src/app/interfacesTwo/personajes';
import { ApiconectionService } from 'src/app/shared/services/apiconection.service';

@Component({
  selector: 'app-fut-home',
  templateUrl: './fut-home.component.html',
  styleUrls: ['./fut-home.component.scss']
})
export class FutHomeComponent implements OnInit {
  characters: FuturamaCharacters[] | any;
  publicaciones: any;
  publicacionesTwoo: any;
  charactersTwoo: FuturamaCharacters[] | any;

  constructor(
    private httpService: ApiconectionService
  ) { }

  ngOnInit(): void {
    //this.getCharacters();
    this.getDataUsers();
  }

  getCharacters() {
    this.httpService.getCharacters().subscribe((res: FuturamaCharacters) => {
      this.characters = res;
      this.charactersTwoo = res;
      console.log('-----> ', res);
    })
  }
  onClick(e: any){
    const search = e.target.value;
    this.characters = this.charactersTwoo.filter((({name}: FuturamaCharacters)=>{
      return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    }))

    console.log(search);
    
  }

  getPersonajes(){
    this.httpService.getPersonajes().subscribe((res: any)=>{
      console.log('Esta es tu respusta ', res);
      
    })
  }

  getDataUsers(){
    this.httpService.getPublicaciones().subscribe((res: any)=>{
      console.log('-----> ', res);
      this.publicaciones = res;
      this.publicacionesTwoo = res;
    })
  }

}
