import {
  Component,
  ElementRef,
  HostListener,
  QueryList,
  signal,
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
import { LibrariesComponent } from './features/components/libraries/libraries.component';
import { ThemeSwitcherComponent } from '@shared/services/theme/switcher/switcher.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from './core/components/icon-button/icon-button.component';
import { ColorGeneratorService } from './core/services/color-generator/color-generator.service';
import { ViewportService } from '@shared/services/viewport/viewport.service';

@Component({
  imports: [
    HeaderComponent,
    AboutComponent,
    InterestComponent,
    ProjectsComponent,
    ContactComponent,
    ThemeSwitcherComponent,
    MatIconModule,
    MatButtonModule,
    IconButtonComponent,
    LibrariesComponent,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('app');

  constructor(
    private iconRegistry: MatIconRegistry,
    private themeService: ThemeService,
    public viewportService: ViewportService,
    colorGeneratorService: ColorGeneratorService,
  ) {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-rounded');

    const color = colorGeneratorService.getNextColor();
    this.themeService.applyMaterialThemeFromColor(color);

    setInterval(() => {
      const color = colorGeneratorService.getNextColor();
      this.themeService.applyMaterialThemeFromColor(color);
    }, 500);
  }

  @ViewChildren('container') containerElements!: QueryList<ElementRef<HTMLDivElement>>;

  private isAutoScrolling = false;
  currentIndex = 0;

  @HostListener('window:scrollend', ['$event'])
  public onScrollEnd(event: Event): void {
    if (this.viewportService.isMediumDown()) {
      return;
    }

    if (this.isAutoScrolling || !this.containerElements || this.containerElements.length === 0) {
      return;
    }

    let closestElement: HTMLElement | null = null;
    let closestIndex = 0;
    let minDistance = Infinity;

    this.containerElements.forEach((containerRef, index) => {
      const nativeElement = containerRef?.nativeElement;
      if (!nativeElement) {
        return;
      }

      const rect = nativeElement.getBoundingClientRect();
      const distance = Math.abs(rect.top);

      if (distance < minDistance) {
        minDistance = distance;
        closestElement = nativeElement;
        closestIndex = index;
      }
    });

    if (closestElement && minDistance < 400) {
      this.isAutoScrolling = true;

      this.currentIndex = closestIndex;

      setTimeout(() => {
        (closestElement as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 0);

      setTimeout(() => {
        this.isAutoScrolling = false;
      }, 0 + 400);
    }
  }

  public nextPage(): void {
    if (!this.containerElements || this.containerElements.length === 0) {
      return;
    }

    // Increment index, but don't exceed the total number of containers
    if (this.currentIndex < this.containerElements.length - 1) {
      this.currentIndex++;
    }

    // Get the target element using the updated index
    const targetRef = this.containerElements.toArray()[this.currentIndex];
    const nativeElement = targetRef?.nativeElement;

    if (nativeElement) {
      this.isAutoScrolling = true;

      nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Release the auto-scroll lock after the animation completes
      setTimeout(() => {
        this.isAutoScrolling = false;
      }, 400);
    }
  }

  public prevPage(): void {
    if (!this.containerElements || this.containerElements.length === 0) {
      return;
    }

    // Decrement index, but don't go below 0
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }

    // Get the target element using the updated index
    const targetRef = this.containerElements.toArray()[this.currentIndex];
    const nativeElement = targetRef?.nativeElement;

    if (nativeElement) {
      this.isAutoScrolling = true;

      nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Release the auto-scroll lock after the animation completes
      setTimeout(() => {
        this.isAutoScrolling = false;
      }, 400);
    }
  }
}
