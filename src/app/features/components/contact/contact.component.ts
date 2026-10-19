import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PageComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {}
