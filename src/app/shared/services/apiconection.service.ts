import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { FuturamaCharacters } from 'src/app/interfacesTwo/personajes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiconectionService {
  private myUrl = environment.apiUrlTwoo;
  constructor(
    private http: HttpClient
  ) { }

  getCharacters(){
    return this.http.get<any>(`${this.myUrl}/characters`).pipe(
      map((res: any)=>{
        const myDta = res.items.map(({id, name, image, species, status, gender}:FuturamaCharacters)=>{
          return {
            id: id,
            name: name,
            image: image,
            species: species,
            status: status,
            gender: gender
          }
        })
        // console.log('esta es tu respuesta ---> ', res);
        return myDta;
      }),
      catchError(err => {
        throw 'error in source. Details: ' + err;
      })
    )
  }
}
