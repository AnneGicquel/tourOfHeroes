import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';

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

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
