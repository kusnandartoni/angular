import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero:Hero;

  constructor(
    private heroService: HeroService
  ) { 
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(data=>{
      this.heroes = data;
    })
  }

}
