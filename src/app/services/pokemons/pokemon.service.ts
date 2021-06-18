import { Pokemon } from './../../Models/pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TYPES } from './../../utils/constants';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemon: Pokemon = {
    types: [],
    height: 0,
    weight: 0
  };


  constructor(private http: HttpClient) { }

  getImage(id: number, shiny: boolean = false): string {
    if(shiny){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`;
    }
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }

  async callAPI (id: number): Promise<void> {
    await this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}/`).toPromise()
    .then((response: any) => {
      let types: string[] = [];
      response['types'].forEach(element => {
        types.push(TYPES[element['type']['name']]);
      });
      this.pokemon.types = types;
      this.pokemon.height = response['height'] * 10;
      this.pokemon.weight = response['weight'] / 10 ;
   })
    .catch((err) => { console.log(err); });
  }

}
