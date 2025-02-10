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
  charactersTwoo: FuturamaCharacters[] | any;

  constructor(
    private httpService: ApiconectionService
  ) { }

  ngOnInit(): void {
    this.getCharacters();
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

}
