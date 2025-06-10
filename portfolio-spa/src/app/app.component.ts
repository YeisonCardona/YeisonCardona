import {Component, Inject, OnInit} from '@angular/core';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { SkillsComponent } from './features/skills/skills.component';
import { WelcomeComponent } from './features/welcome/welcome.component';

import { ThemeService } from './core/services/theme/theme.service';
import { FontsComponent } from './core/fonts/fonts.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [
    FontsComponent,
    NavbarComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    // this.themeService.applyMaterialThemeFromColor("#ff4d5a");

  }


}
