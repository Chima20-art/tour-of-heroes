import { Component } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor( private heroService: HeroService) {
  }

  ngOnInit(){
    this.getHeroes()
  }

  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }
}
