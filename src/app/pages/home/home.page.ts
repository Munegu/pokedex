import { PokemonList } from './../../Models/pokemon-list';
import { POKEDEX } from './../../utils/constants';
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  
  pokemons: PokemonList[] = POKEDEX ;

  constructor() {
  }

  getImage(id: number): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
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

  getDetails () {
    console.log('getDetails');
  }

}
