import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from '@shared/services/theme/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { HeaderComponent } from './features/components/header/header.component';
import { AboutComponent } from './features/components/about/about.component';
import { InterestComponent } from './features/components/interest/interest.component';
import { ProjectsComponent } from './features/components/projects/projects.component';
import { ContactComponent } from './features/components/contact/contact.component';

@Component({
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    InterestComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('app');

  constructor(
    private iconRegistry: MatIconRegistry,
    private themeService: ThemeService,
  ) {}

  ngAfterViewInit() {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-rounded');
    const color = this.themeService.generateRandomColor();
    this.themeService.applyMaterialThemeFromColor(color);
  }

  @ViewChildren('container') containerElements!: QueryList<ElementRef<HTMLDivElement>>;

  private isAutoScrolling = false;

  @HostListener('window:scrollend', ['$event'])
  public onScrollEnd(event: Event): void {
    if (this.isAutoScrolling || !this.containerElements || this.containerElements.length === 0) {
      return;
    }

    let closestElement: HTMLElement | null = null;
    let minDistance = Infinity;

    this.containerElements.forEach((containerRef) => {
      const nativeElement = containerRef?.nativeElement;
      if (!nativeElement) {
        return;
      }

      const rect = nativeElement.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestElement = nativeElement;
      }
    });

    if (closestElement) {
      this.isAutoScrolling = true;

      (closestElement as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        this.isAutoScrolling = false;
      }, 600);
    }
  }
}
