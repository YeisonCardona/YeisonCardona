import { Injectable } from '@angular/core';
import { navbarItem } from '@shared/components/navbar/navbar.types';

@Injectable({
  providedIn: 'root',
})
export class AppNavbarItems {
  getItems(): navbarItem[] {
    return [];
  }

  getIconItems(): navbarItem[] {
    return [];
  }
}
