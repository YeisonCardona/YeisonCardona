import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';
import { MatCardModule } from '@angular/material/card';

export interface InterestArea {
  title: string;
  description: string;
}

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule, PageComponent, MatCardModule],
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss'],
})
export class InterestComponent {
  professionalInterests: InterestArea[] = [
    {
      title: 'Full-stack web & mobile architecture',
      description:
        'Design and development of high-performance web and mobile applications using <strong>modern frameworks</strong>, clean architectures, and <strong>responsive design principles</strong>.',
    },
    {
      title: 'Distributed systems & backend engineering',
      description:
        'Construction of robust backend microservices, <strong>RESTful APIs</strong>, scalable databases, and <strong>deterministic execution environments</strong> for complex workloads.',
    },
    {
      title: 'Digital signal processing (DSP) & BCI',
      description:
        'Digital signal processing, real-time <strong>EEG feature extraction</strong>, and low-latency <strong>hardware trigger synchronization</strong> for experimental brain-computer interface paradigms.',
    },
    {
      title: 'Applied AI & edge LLMOps',
      description:
        'Optimization and deployment of <strong>local large language models</strong> on edge environments, <strong>RAG pipeline construction</strong>, and AI-assisted engineering workflows.',
    },
  ];
}
