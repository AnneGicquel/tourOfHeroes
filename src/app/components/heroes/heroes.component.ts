import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/mock-heroes';

// is a decorator function that specifies the Angular metadata for the component.
@Component({
  // The component's CSS element selector.
  selector: 'app-heroes',
  // The location of the component's template file.
  templateUrl: './heroes.component.html',
  // The location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  
  heroes = HEROES;
  selectedHero?: Hero;

  // méthode pour afficher le héros
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };

}
 
