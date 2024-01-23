import {Component} from '@angular/core';
import { Hero } from '../hero'
import {UpperCasePipe, NgFor, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {HeroService} from "../hero.service";


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

  constructor(private heroService: HeroService) {}

  ngOnInit(){
    this.getHeroes();
  }

  selectedHero?:Hero;
  heroes:Hero[] = [];
  getHeroes(){
    this.heroes = this.heroService.getHeroes()
  }
  onSelect (hero:Hero){
    this.selectedHero =hero;
  }
}
