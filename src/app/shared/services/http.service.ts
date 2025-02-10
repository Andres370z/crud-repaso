import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Episodes, Locations, Personaje, PersonajeById } from 'src/app/interfaces/personajes';
import { catchError, firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  myUrl: any = environment.apiUrl
  constructor(
    private httpService: HttpClient
  ) { }

  getDta() {
    return this.httpService.get<any>(`${this.myUrl}/character`).pipe(
      map((res) => {
        const personajes = res.results.map(({ name, status, species, origin, image }: Personaje) => {
          return {
            name: name,
            status: status,
            species: species,
            origin: origin,
            image: image
          };
        });
        console.log('Desde el servicio', personajes);
        return personajes;
      }),
      catchError((error) => {
        console.log(error);
        throw error; // Relanza el error para que el componente lo maneje
      })
    );
  }

  getDatabyId(id: number) {
    return this.httpService.get<any>(`${this.myUrl}/character/${id}`).pipe(

      map((res) => {
        console.log('este es dataId ----> ', res);
        const data = {
          id: id,
          name: res.name,
          status: res.status,
          species: res.species,
          gender: res.gender,
          origen: res.origen
        }
        return data;
      }),
      catchError((error) => {
        console.log(error);
        throw error; // Relanza el error para que el componente lo maneje
      })
    )
  }

  getLocations() {
    return this.httpService.get<any>(`${this.myUrl}/location`).pipe(
      map((res: any) => {
        console.log(res);
        const locations = res.results.map(({ id, name, type, dimension, created }: Locations) => {
          return {
            id: id,
            name: name,
            type: type,
            dimension: dimension,
            created: created
          }
        })
        return locations;
      }),
      catchError(err => {
        console.log(err);
        
        throw 'error in source. Details: ' + err;
      })
    )
  }

  getEpisodes(){
    return this.httpService.get<any>(`${this.myUrl}/episode`).pipe(
      map((res)=> {
        const episodes = res.results.map(({id, name, air_date, episode, characters, url}: Episodes)=>{
          return {
            id: id,
            name: name,
            air_date: air_date,
            episode: episode,
            characters: characters,
            url: url
          }
        })
        return episodes;
      }),  catchError(err => {
        throw 'error en la consulta: ' + err;
      })
    )
  }

  getOneEpisode(id: number){
    return this.httpService.get<any>(`${this.myUrl}/episode/${id}`).pipe(
      map((res: any)=> {
        const data: Episodes =  {
          id: res.id,
          name: res.name,
          air_date: res.air_date,
          episode: res.episode,
          characters: res.characters,
          url: res.url
        }
        return data;
      }),
      catchError(err => {
        throw 'error en la peticion: ' + err;
      })
    );
  }

  getCharacters(){
    return this.httpService.get<any>(`${this.myUrl}/character`).pipe(
      map((res: any)=> {

        const data = res.results.map(({name, status, species, image}: Personaje)=>{
          return {
            name: name,
            status: status,
            species: species,
            image: image
          }
        })
        // console.log(res);
        return data;
      }),
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })
    )
  }
}
