import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PageComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {}
