import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule, PageComponent],
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent {}
