import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project: {
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    githubUrl: string;
    pypiUrl: string,
    docsURL: string,
    headerImage: string;
  } = {
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
    technologies: [],
    githubUrl: '',
    pypiUrl: '',
    docsURL: '',
    headerImage: ''
  };

  constructor() {}

}
