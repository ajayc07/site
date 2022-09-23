import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectData = [
    {
      title: 'TeeRex Store',
      desc: 'TeeRexStore is a responsive E-commerce site for selling t-shits. Developed as a solution for coding challenge.',
      techStack: ['Angular 14', 'TypeScript', 'HTML', 'SCSS'],
      gitHubLink: 'https://github.com/ajayc07/teeRexStore',
      live: 'https://ajayc07.github.io/teeRexStore/product'
    },
    {
      title: 'Color Companion',
      desc: 'Angular application which allows the user to decide best color combo by trying various color combo on a object.',
      techStack: ['Angular 7', 'TypeScript', 'HTML', 'SCSS'],
      gitHubLink: 'https://github.com/ajayc07/colorMatcher',
      live: 'https://ajayc07.github.io/colorMatcher'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
