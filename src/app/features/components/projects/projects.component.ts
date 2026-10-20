import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, PageComponent, MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {}
