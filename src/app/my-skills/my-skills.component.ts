import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  skills = [
    {
      img: './assets/img/html-css.png',
      title: 'CSS',
    },
    {
      img: './assets/img/html.png',
      title: 'HTML',
    },
    {
      img: './assets/img/javascript.png',
      title: 'JavaScript',
    },
    {
      img: './assets/img/api.png',
      title: 'Rest API',
    },

    {
      img: './assets/img/angular1.png',
      title: 'Angular',
    },
    {
      img: './assets/img/typescript-144.png',
      title: 'Typscript',
    },
    {
      img: './assets/img/firebase-96.png',
      title: 'Firebase',
    },
    {
      img: './assets/img/git.png',
      title: 'Git',
    },
    {
      img: './assets/img/scrum.png',
      title: 'SCRUM',
    },
    {
      img: './assets/img/databases.png',
      title: 'Databases',
    },
    {
      img: './assets/img/images.png',
      title: 'Material Design',
    }

    
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    
  }


}
