import { Component } from '@angular/core';
import {ProjectComponent} from "../../core/components/project/project.component";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        ProjectComponent
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


}
