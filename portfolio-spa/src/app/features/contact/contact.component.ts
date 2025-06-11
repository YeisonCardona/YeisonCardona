import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
      MatIcon,
      MatCardModule,
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


}

