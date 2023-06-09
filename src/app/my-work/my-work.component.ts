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

    {path: 'slack-clone.jpg', 
      tag: 'angular', 
      title: 'Slack-Clone', 
      description: 'This page was build with Angular.', 
      p: 'Get to know me and my projects.'
    },

  ];

  getallProjectPictures(): object[]{
    return this.allProjectPictures.filter(c => (c.tag == this.searchparam || this.searchparam == 'all'));
  }

  projectsLinks = [
   'http://el-pollo-loco.waldemar-neumann.de/',
   'http://join.waldemar-neumann.de/',
   'http://slack-clone.waldemar-neumann.de/',
 
  ];


  gitLinks = [
    'https://github.com/WaldemarNeumann/El-Pollo-Loco',
    'https://github.com/WaldemarNeumann/gruppenarbeit-join',
    'https://github.com/WaldemarNeumann/Slack-Clone',
 
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
