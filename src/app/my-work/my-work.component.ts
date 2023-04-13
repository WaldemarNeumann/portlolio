import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {


  t = 0;
 @Input() startColor = true;

  public isChangedBlock = {};
  public searchparam = "all";
 
  allProjectPictures = [
    {path: 'el-pollo-loco.jpg', 
      tag: 'javascript',  
      title: 'El pollo loco', 
      description: 'Object-oriented jump-and-run-game based on JavaScript.', 
      p: 'Pepe is a friendly Mexican, but to survive he must evade or fight his enemies.'
    },

    {path: 'join.png', 
      tag: 'javascript', 
      title: 'Join', 
      description: 'A Kanban board based on JavaScript and Bootstrap.', 
      p: 'The board gives an overview over the current tasks in a project by showing the status, assignments and other information.' 
    }, 

    {path: 'portfolio.jpg', 
      tag: 'angular', 
      title: 'Portfolio', 
      description: 'This page was build with Angular.', 
      p: 'Get to know me and my projects.'
    },

    {path: 'pokedex.jpg', 
      tag: 'javascript', 
      title: 'Pokedex', 
      description: 'Display information using JavaScript and API.', 
      p: 'Create an overview of all Pokemons.'
    }
  ];

  getallProjectPictures(): object[]{
    return this.allProjectPictures.filter(c => (c.tag == this.searchparam || this.searchparam == 'all'));
  }

  projectsLinks = [
   'https://waldemar-neumann.developerakademie.net/EL_POLLO_LOCO/index.html',
   'https://waldemar-neumann.developerakademie.net/gruppenarbeit%20join/index.html'
  ];


  gitLinks = [
    'https://github.com/WaldemarNeumann/El-Pollo-Loco',
    'https://github.com/WaldemarNeumann/gruppenarbeit-join',
    'https://github.com/WaldemarNeumann/portlolio',
  ];

  openNewTab(y) {
    window.open(this.projectsLinks[y]);
  }


  openGitLink(g){
    window.open(this.gitLinks[g]);
  }



  
  constructor() { }

  ngOnInit(): void {
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
