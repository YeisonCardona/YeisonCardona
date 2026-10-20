import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import * as Prism from 'prismjs';

import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

@Component({
  selector: 'app-code-block',
  standalone: true,
  template: `
    <pre
      class="line-numbers"
    ><code #codeContainer [class]="'language-' + language">{{ code }}</code></pre>
  `,
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent implements AfterViewInit, OnChanges {
  @Input() code: string = '';
  @Input() language: string = 'typescript';

  @ViewChild('codeContainer') codeContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    this.highlight();
  }

  ngOnChanges(): void {
    this.highlight();
  }

  private highlight(): void {
    if (this.codeContainer) {
      Prism.highlightElement(this.codeContainer.nativeElement);
    }
  }
}
