import { Component, OnInit } from '@angular/core';
import { Episodes, Locations, Personaje } from 'src/app/interfaces/personajes';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personajes: Personaje[] | any;
  personajesCopy: Personaje[] | any;
  numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(
    private httpService: HttpService
  ) {

   }

  ngOnInit(): void {
    this.getEpisodiobyId(3);
    this.filterNumber(this.numeros)
    this.getDta();
    // this.getById()
    // this.getDta()
  }

  getDta(){
    this.httpService.getDta().subscribe((res: any)=> {
      this.personajes = res
      console.log('----> ', this.personajes);
      this.personajesCopy = this.personajes;

    })
    
  }

  filter(e: any){
    const search = e.target.value;
    this.personajes = this.personajesCopy?.filter(({name}: Personaje)=>{
      return name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    })
  }

  getById(){
    this.httpService.getDatabyId(2).subscribe((res: any)=>{
      console.log('dataid --> ', res);
      
    })
  }

  getDtaByLocations(){
    this.httpService.getLocations().subscribe((res: Locations) => {
      console.log('esta es tu respuesta ---->', res);
    })
  }
  getEpisodes(){
    this.httpService.getEpisodes().subscribe((res: Episodes)=>{
      console.log('esta es tu respuesta ---->', res);
    })
  }

  filterNumber(numeros: number[]){
    const newNumber =  numeros.filter(number => number % 2 === 0)
    return console.log(newNumber);
  }


  getEpisodiobyId(id: number){
    this.httpService.getOneEpisode(id).subscribe((res: any)=> {
      console.log('esta es tu respuesta ----> ', res);
      
    })
  }
  
}
