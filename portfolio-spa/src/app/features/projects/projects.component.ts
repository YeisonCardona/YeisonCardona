import { Component } from '@angular/core';
import {ProjectComponent} from '../../core/components/project/project.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectComponent,
    MatGridListModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  projectList = [

    {
      title: "Smart Home Automation System",
      subtitle: "IoT-based home control and monitoring solution",
      description: "Developed a comprehensive IoT solution for home automation using Angular and Node.js. Features include real-time device monitoring, automated scheduling, and energy consumption analytics.",
      imageUrl: "https://material.angular.dev/assets/img/examples/shiba2.jpg",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
        "devicon-matplotlib-plain",
        "devicon-numpy-plain",
        "devicon-apachekafka-original",
      ],
      githubUrl: "https://github.com/username/smart-home-automation",
      headerImage: "https://material.angular.dev/assets/img/examples/shiba1.jpg"
    },
    // {
    //   title: "",
    //   subtitle: "",
    //   description: "",
    //   imageUrl: "",
    //   technologies: [],
    //   githubUrl: "",
    //   headerImage: ""
    // }


  ]





}
