import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorGeneratorService {
  private currentHue = Math.floor(Math.random() * 360);
  private saturation = 65;
  private lightness = 55;

  // Signal reactiva opcional para que los componentes reaccionen automáticamente
  public currentColor = signal<string>(
    this.hslToHex(this.currentHue, this.saturation, this.lightness),
  );

  private hslToHex(h: number, s: number, l: number): string {
    s /= 100;
    l /= 100;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    // Convertir a valores de 0 a 255 y luego a hexadecimal con padding de 2 dígitos
    const red = Math.round((r + m) * 255)
      .toString(16)
      .padStart(2, '0');
    const green = Math.round((g + m) * 255)
      .toString(16)
      .padStart(2, '0');
    const blue = Math.round((b + m) * 255)
      .toString(16)
      .padStart(2, '0');

    return `#${red}${green}${blue}`;
  }

  public getNextColor(): string {
    const goldenAngleStep = 1;
    this.currentHue = (this.currentHue + goldenAngleStep) % 360;

    const newColor = this.hslToHex(this.currentHue, this.saturation, this.lightness);
    this.currentColor.set(newColor);
    return newColor;
  }
}
