import { Component, OnInit } from '@angular/core';
import { hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; 
  selectedHero: hero;

  onSelect(hero: hero): void{
  	this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
