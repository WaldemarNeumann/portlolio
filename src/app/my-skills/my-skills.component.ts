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
      title: 'HTML/CSS',
    },
    {
      img: './assets/img/java script.png',
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
    }

    
  ];

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    
  }


}
