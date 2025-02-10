import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs';
import { FuturamaCharacters, misPersonajes } from 'src/app/interfacesTwo/personajes';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiconectionService {
  private myUrl = environment.apiUrlTwoo;
  private myUrlTree = environment.apiTree;
  private storageKey = 'posts';
  private posts: any[] = [];
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



  getPersonajes(){
    return this.http.get<any>(`${this.myUrl}/characters`).pipe(
      map((res: any)=>{
        const myChracters = res.items.map(({createdAt, gender, id, image, name, status, species}: misPersonajes)=>{
          return  {
            gender: gender,
            id: id,
            image: image,
            name: name,
            status: status,
            species: species
          }
        })
        // console.log(res);
        return myChracters
      }), catchError(err => {
        throw 'error en la peticion: ' + err;
      })
    )
  }


  getPublicaciones(){
    return this.http.get<any>(`${this.myUrlTree}/posts`).pipe(
      map((res: any)=>{
        return res;
      }), catchError(err => {
        throw 'error en la solicitud: ' + err;
      })
    )
  }

  private loadPosts(): void {
    // en el contruc
    const storedPosts = localStorage.getItem(this.storageKey);
    this.posts = storedPosts ? JSON.parse(storedPosts) : [];
  }

  private savePosts(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.posts));
  }

  getPosts(): any[] {
    return this.posts;
  }

  addPost(post: any): void {
    post.id = Date.now();
    this.posts.push(post);
    this.savePosts();
  }

  updatePost(updatedPost: any): void {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
      this.savePosts();
    }
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
    this.savePosts();
  }
}
