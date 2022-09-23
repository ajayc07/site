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
      techStack: ['TypeScript', 'HTML', 'SCSS'],
      gitHubLink: 'https://github.com/ajayc07/teeRexStore',
      live: 'https://ajayc07.github.io/teeRexStore/product'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
