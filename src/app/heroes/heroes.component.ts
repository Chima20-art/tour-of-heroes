import {Component} from '@angular/core';
import { Hero } from '../hero'
import {UpperCasePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HEROES} from "../mock-heroes";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    UpperCasePipe,
    FormsModule,
    NgFor,
    NgIf,
    HeroDetailComponent
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {
  selectedHero?:Hero;
  heroes =HEROES;

  onSelect (hero:Hero){
    this.selectedHero =hero;
  }
}
