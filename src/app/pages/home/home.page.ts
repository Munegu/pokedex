import { PokemonService } from './../../services/pokemons/pokemon.service';
import { PokemonList } from '../../models/pokemon-list';
import { POKEDEX } from './../../utils/constants';
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  
  pokemons: PokemonList[] = POKEDEX ;

  constructor(private router: Router,
    private pokemonservice: PokemonService
    ) {
  }

  getImage(id: number): string {
   return  this.pokemonservice.getImage(id);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      if (this.pokemons.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getDetails (id: number) {
    this.router.navigate(['/details', id]);;
  }

}
