import { Component, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    RouterLink,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(@Inject(DOCUMENT) private document: Document) {}


  scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navLinks = [
    { path: 'welcome', label: 'Home' },
    { path: 'about', label: 'About' },
    // { path: 'skills', label: 'Skills' },
    // { path: 'projects', label: 'Projects' },
    // { path: 'contact', label: 'Contact' }
  ];


  activeLink = this.navLinks[0].path;


}
