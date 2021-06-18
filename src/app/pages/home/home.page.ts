import { POKEDEX } from 'src/app/utils/constants';
import { PokemonService } from './../../services/pokemons/pokemon.service';
import { PokemonList } from '../../models/pokemon-list';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

  pokemons: PokemonList[] = POKEDEX ;

  constructor(private router: Router,
    private pokemonservice: PokemonService
    ) {
  }

  getImage(id: number): string {
   return  this.pokemonservice.getImage(id);
  }

  filterList(event) {

    this.pokemons= POKEDEX;
    const searchTerm = event.srcElement.value;

    if (!searchTerm) {
      return;
    }
  
    this.pokemons = this.pokemons.filter(pokemon => {
      if (pokemon.name && searchTerm) {
        return (pokemon.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      }
    });

  }
  getDetails (id: number) {
    this.router.navigate(['/details', id]);;
  }

}
