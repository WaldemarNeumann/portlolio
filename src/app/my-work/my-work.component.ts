import { Component, OnInit, Input } from '@angular/core';




@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit{

  t = 0;
  @Input() startColor = true;
 
   public isChangedBlock = {};
   public searchparam = "all";
  
   allProjectPictures = [
     {path: 'el-pollo-loco.jpg', tag: 'javascript',  title: 'El pollo loco', description: 'Object-oriented jump-and-run-game based on JavaScript.', p: 'Pepe is a friendly Mexican, but to survive he must evade or fight his enemies.'},
     {path: 'join.png', tag: 'javascript', title: 'Join', description: 'A Kanban board based on JavaScript and Bootstrap.', p: '  The board gives an overview over the current tasks in a project by showing the status, assignments and other information.' }, 
     {path: 'portfolio.jpg', tag: 'angular', title: 'Portfolio', description: 'This page was build with Angular.', p: 'Get to know me and my projects.'},
     {path: 'pokedex.jpg', tag: 'angular', title: 'Pokedex', description: 'The popular drinking game as multi-user-app based on Angular and Firebase.', p: 'By drawing cards in turns, the players get instruction on who should have a drink.'}
   ];
 
 
   projectsLinks = [
       'https://tijana-couturier.developerakademie.net/El%20polo%20loco/index.html',
       'https://tijana-couturier.developerakademie.net/Join/login.html',
       'https://tijana-couturier.de/',
       'https://ring-of-fire-243e7.web.app/'
   ];
 
   
   gitLinks = [
     'https://github.com/TijanaCouturier/El-pollo-loco',
     'https://github.com/TijanaCouturier/Join',
     'https://github.com/TijanaCouturier/Myportfolio',
     'https://github.com/TijanaCouturier/RingOfFire'
   ];
 
   
   constructor() { }
 
   ngOnInit(): void {
   }
 
   getallProjectPictures(): object[]{
     return this.allProjectPictures.filter(c => (c.tag == this.searchparam || this.searchparam == 'all'));
   }
 
 
   openNewTab(y: number) {
     window.open(this.projectsLinks[y]);
   }
 
 
   openGitLink(g: number){
     window.open(this.gitLinks[g]);
   }
 
 
   setSearchParam(s: any, t: any){
     this.searchparam = s;
     if (this.t == t){
       this.t = 0;
       this.searchparam = 'all';
     }
     else {
       this.t = t;
       this.startColor = false;
     }
   }

}
