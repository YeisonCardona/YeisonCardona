import { Injectable } from '@angular/core';
import { MemoizeService } from '../memoize/memoize.service';


import {
  applyTheme,
  hexFromArgb,
  sourceColorFromImage,
  themeFromSourceColor,
  argbFromHex,
} from '@material/material-color-utilities';
import {ActivatedRoute} from '@angular/router';


export type ThemeMode = 'dark' | 'light' | 'auto';

/**
 * The ThemeService class is responsible for dynamically applying a Material Theme
 * based on the primary color extracted from a provided HTML image element. It updates
 * CSS custom properties to reflect the generated theme.
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private memoizedResults = new Map<string, number>();
  private memoizedPalettes = new Map<string, any>();
  private currentThemeMode: ThemeMode = 'auto';

  constructor(
    private memoizeService: MemoizeService,
  ) {
    // this.setThemeMode('auto');
  }

  generateRandomColor(): string {
    // Genera un color hexadecimal aleatorio
    const randomHex = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    // Convierte a ARGB y de vuelta a hex para asegurar el formato correcto
    const argb = argbFromHex(randomHex);
    return hexFromArgb(argb);
  }

  getCurrentMode(): 'dark' | 'light' {
    let mode = localStorage.getItem('themeMode') as ThemeMode || 'auto';
    if (mode==='auto') {
      let systemDark = localStorage.getItem('themeMode') === 'dark';
      mode = systemDark ? 'dark' : 'light';
    }
    return mode
  }

  setThemeMode(mode: ThemeMode): void {
    const savedColor = localStorage.getItem('themeColor');
    const savedTarget = localStorage.getItem('themeTarget') || 'html';
    if (savedColor) {
      this.applyMaterialThemeFromColor(savedColor, savedTarget, mode);
    }
    // const targetElement = document.querySelector(savedTarget) as HTMLElement;
    // targetElement.style.setProperty('color-scheme', mode);
  }

  async applyVibrantFromImage(img: HTMLImageElement | string, target: HTMLElement | string = "html"): Promise<void> {
    // This method has been simplified to use Material Design color utilities instead of node-vibrant
    // It now does nothing as node-vibrant dependency has been removed
    console.log('applyVibrantFromImage method has been simplified due to dependency removal');
    return Promise.resolve();
  }

  async applyMaterialThemeFromImage(img: HTMLImageElement | string, target: HTMLElement | string = "html", mode: ThemeMode = 'auto'): Promise<void> {

    if (typeof img === 'string') {
      const imageElement = new Image();
      imageElement.src = img;
      img = imageElement;
      await img.decode();
    }

    if (typeof target === 'string') {
      const savedTarget = localStorage.getItem('themeTarget');
      target = document.querySelector(savedTarget || target) as HTMLElement;
    }

    const memoKey = typeof img === 'string' ? img : img.src;
    const seedHex = await this.memoizeService.memoize(
      `sourceColor:${memoKey}`,
      () => sourceColorFromImage(img),
      { storage: 'session', debug: true }
    );

    // Update the application theme using the seed color value from the image
    this.applyMaterialThemeFromColor(hexFromArgb(seedHex), target, mode);

    // applyVibrantFromImage has been simplified and no longer does anything useful
    // await this.applyVibrantFromImage(img, target);

  }


  applyMaterialThemeFromColor(seedHex: string, target: HTMLElement | string = "html", mode: ThemeMode = 'auto'): void {
    // Generate a complete Material Design 3 theme based on the extracted color
    const theme = themeFromSourceColor(argbFromHex(seedHex));

    // Save the current theme color and target
    localStorage.setItem('themeColor', seedHex);
    localStorage.setItem('themeTarget', typeof target === 'string' ? target : 'html');

    if (mode !== 'auto') {
      localStorage.setItem('themeMode', mode);
    }

    let systemDark: boolean;
    if (mode==='auto') {
      // systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      systemDark = localStorage.getItem('themeMode') === 'dark';
    } else {
      systemDark = mode === 'dark';
    }
    mode = systemDark ? 'dark' : 'light';

    if (typeof target === 'string') {
      target = document.querySelector(target) as HTMLElement;
    }
    target.style.setProperty('color-scheme', mode);


    // Apply the generated theme to the document body with dark mode consideration
    applyTheme(theme, {
      target: target,
      dark: systemDark,
      // brightnessSuffix: false,
      // paletteTones: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5, 0],
    });

    // Get current inline styles from the body element
    const currentStyle = target.getAttribute('style') || '';
    // Convert Material Design 3 CSS variable names to Angular Material compatible names
    // Changes '--md-sys-color-' prefix to '--mat-sys-' for compatibility
    const newStyle = currentStyle.replace(/--md-sys-color-/g, '--mat-sys-');
    target.setAttribute('style', newStyle);

    /**
     * Updates the CSS custom property (CSS variable) with the specified key to the provided value.
     *
     * @param {string} key - The name of the CSS variable to be updated.
     * @param {number} value - The value to be set, represented as a number which will be processed into a hexadecimal color format.
     */
    const set = (key: string, value: number) =>
      target.style.setProperty(key, hexFromArgb(value));

    const { primary, secondary, tertiary, neutral } = theme.palettes;

    // https://github.com/material-foundation/material-color-utilities/issues/158
    // https://github.com/QuncCccccc/flutter/blob/0366d4514ba53b1dda6f3eb187af9c8e79d16650/dev/tools/gen_defaults/data/color_dark.json
    // https://github.com/QuncCccccc/flutter/blob/0366d4514ba53b1dda6f3eb187af9c8e79d16650/dev/tools/gen_defaults/data/color_light.json

    if (systemDark) {
      set('--mat-sys-surface-dim', neutral.tone(6));
      set('--mat-sys-surface-bright', neutral.tone(24));
      set('--mat-sys-surface-container-lowest', neutral.tone(4));
      set('--mat-sys-surface-container-low', neutral.tone(10));
      set('--mat-sys-surface-container', neutral.tone(12));
      set('--mat-sys-surface-container-high', neutral.tone(17));
      set('--mat-sys-surface-container-highest', neutral.tone(22));
    } else {
      set('--mat-sys-surface-dim', neutral.tone(87));
      set('--mat-sys-surface-bright', neutral.tone(98));
      set('--mat-sys-surface-container-lowest', neutral.tone(100));
      set('--mat-sys-surface-container-low', neutral.tone(96));
      set('--mat-sys-surface-container', neutral.tone(94));
      set('--mat-sys-surface-container-high', neutral.tone(92));
      set('--mat-sys-surface-container-highest', neutral.tone(90));
    }

    set('--mat-sys-primary-fixed', primary.tone(90));
    set('--mat-sys-primary-fixed-dim', primary.tone(80));
    set('--mat-sys-on-primary-fixed', primary.tone(10));
    set('--mat-sys-on-primary-fixed-variant', primary.tone(30));

    set('--mat-sys-secondary-fixed', secondary.tone(90));
    set('--mat-sys-secondary-fixed-dim', secondary.tone(80));
    set('--mat-sys-on-secondary-fixed', secondary.tone(10));
    set('--mat-sys-on-secondary-fixed-variant', secondary.tone(30));

    set('--mat-sys-tertiary-fixed', tertiary.tone(90));
    set('--mat-sys-tertiary-fixed-dim', tertiary.tone(80));
    set('--mat-sys-on-tertiary-fixed', tertiary.tone(10));
    set('--mat-sys-on-tertiary-fixed-variant', tertiary.tone(30));

    set('--mat-sys-surface-tint', primary.tone(100));
  }

}
