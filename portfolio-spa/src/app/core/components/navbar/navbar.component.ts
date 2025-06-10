import { Component, Inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { DOCUMENT } from '@angular/common';
import { ThemeService, ThemeMode } from '../../../core/services/theme/theme.service';
import {convertBrowserOptions} from '@angular-devkit/build-angular/src/builders/browser-esbuild';

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
  currentMode:ThemeMode = 'auto';
  showLight:boolean = true;
  showDark:boolean = false;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private themeService: ThemeService,
    ) {
    this.currentMode = themeService.getCurrentMode();

    this.showLight = this.currentMode === 'light';
    this.showDark = this.currentMode === 'dark';

    console.log(this.currentMode);
  }

  scrollToElement(elementId: string): void {
    const element = this.document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setMode(mode: ThemeMode): void {
    this.themeService.setThemeMode(mode)

    const elementLight = this.document.getElementById("mode-dark");
    if (elementLight) elementLight.style.setProperty('display', 'none');

    const elementDark = this.document.getElementById("mode-light");
    if (elementDark) elementDark.style.setProperty('display', 'none');

    const elementClicked = this.document.getElementById("mode-" + (mode === 'dark' ? 'light' : mode === 'light' ? 'dark' : mode));
    if (elementClicked) elementClicked.style.setProperty('display', 'block');
    console.log(elementClicked);

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
