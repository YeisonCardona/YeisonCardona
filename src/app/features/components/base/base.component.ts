import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [CommonModule, PageComponent],
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent {}
