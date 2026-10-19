import {  Injectable } from '@angular/core';
import { navItem } from '../app/shared/components/sidenav/sidenav.types';

@Injectable({
  providedIn: 'root',
})
export class AppSidenavItems {

  getTopItems(): navItem[] {
    return [];
  }

  getBottomItems(): navItem[] {
    return [];
  }
}
