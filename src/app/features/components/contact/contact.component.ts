import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageComponent } from '../../../core/components/page/page.component';

interface ContactItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, PageComponent, MatButton, MatIcon, MatListModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  displayed = signal(false);

  displayInformation() {
    this.displayed.set(true);
  }

  decodeBase64(base64Str: string): string {
    const binString = atob(base64Str);
    const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0)!);
    return new TextDecoder().decode(bytes);
  }

  encodedContacts(): ContactItem[] {
    return [
      { label: 'RnVsbCBOYW1l', value: 'WWVpc29uIE4uIENhcmRvbmEgQS4=' },
      { label: 'RW1haWw=', value: 'eWVpc29uLmVuZ0BnbWFpbC5jb20=' },
      { label: 'UGhvbmUgLyBXaGF0c0FwcA==', value: 'KzU3IDMxNCAzNzAgNTE1Ng==' },
      { label: 'TG9jYXRpb24=', value: 'TWFuaXphbGVzLCBDb2xvbWJpYQ==' },
      {
        label: 'U3RhdHVz',
        value: 'QXZhaWxhYmxlIGZvciB0ZWNobmljYWwgY29uc3VsdGluZyAmIHJlbW90ZSByb2xlcw==',
      },
    ];
  }

  getInformation(): ContactItem[] {
    if (!this.displayed()) return [];
    // return [
    //   { label: 'Full Name', value: 'Yeison N. Cardona A.' },
    //   { label: 'Email', value: 'yeison.eng@gmail.com' },
    //   { label: 'Phone / WhatsApp', value: '+57 314 370 5156' },
    //   { label: 'Location', value: 'Manizales, Colombia' },
    //   { label: 'Status', value: 'Available for technical consulting & remote roles' },
    // ];

    const decodedContacts: ContactItem[] = this.encodedContacts().map((item) => ({
      label: this.decodeBase64(item.label),
      value: this.decodeBase64(item.value),
    }));

    return decodedContacts;
  }
}
