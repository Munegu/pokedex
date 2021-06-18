import { Pokemon } from './../../Models/pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonList } from 'src/app/models/pokemon-list';
import { PokemonService } from 'src/app/services/pokemons/pokemon.service';
import { POKEDEX } from 'src/app/utils/constants';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute,
    private pokemonservice: PokemonService) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
  })
   }

  pokemons: PokemonList[] = POKEDEX ;
  id: number;
  pokemon: Pokemon = this.pokemonservice.pokemon;

  

   getImage(id: number, shiny?: boolean): string {
    return  this.pokemonservice.getImage(id, shiny);
   }

  ngOnInit() {
    this.pokemonservice.callAPI(this.id);
  }

}
