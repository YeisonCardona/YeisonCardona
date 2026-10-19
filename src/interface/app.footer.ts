import { Injectable } from '@angular/core';
import { footerColumn } from '@shared/components/footer/footer.types';

@Injectable({
  providedIn: 'root',
})
export class AppFooter {
  getColumns(): footerColumn[] {
    return [];
  }

  getBody() {
    return '';
  }
}
