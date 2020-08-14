import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
//import {Heroes} from '../mock-heroes';
import {HeroService} from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
// selectedHero:Hero;
 //heroes=Heroes;
 heroes: Hero[];
 /*onSelect(hero4:Hero):void{
   this.selectedHero=hero4;
 }*/
  hero:Hero={
    id:56,
    name:'kushi'
   };
   constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

     }
    /* getHeroes(): void {
      this.heroes = this.heroService.getHeroes();
    } */
    /*getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes1 => this.heroes = heroes1);
    }*/
    getHeroes(): void {
      this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(0, 6));
    }
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.heroService.addHero({ name } as Hero)
        .subscribe(hero => {
          this.heroes.push(hero);
        });
    }
    delete(hero: Hero): void {
      this.heroes = this.heroes.filter(h => h !== hero);
      this.heroService.deleteHero(hero).subscribe();
    }
}
