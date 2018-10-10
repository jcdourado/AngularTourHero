import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: hero[]; 
  selectedHero: hero;

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  onSelect(hero: hero): void{
  	this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

}
