import {Component, OnInit} from '@angular/core';
import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { InterestsComponent } from './features/interests/interests.component';
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
    InterestsComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    this.themeService.applyMaterialThemeFromColor(this.themeService.generateRandomColor(), "html");
  }


}
