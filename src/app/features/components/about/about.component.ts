import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';
import { MatChipsModule } from '@angular/material/chips';

export interface SkillCategory {
  category: string;
  items: string[];
}
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, PageComponent, MatChipsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public skills: SkillCategory[] = [
    {
      category: 'Architecture & System Design',
      items: [
        'Microservices',
        'Distributed Systems',
        'Event-Driven Architecture',
        'Observability',
        'Deterministic Execution',
      ],
    },
    {
      category: 'Programming Languages',
      items: ['*Python', '*TypeScript', 'JavaScript', 'Bash', 'HTML5', 'CSS3', 'SQL'],
    },
    {
      category: 'Backend Ecosystem',
      items: ['*FastAPI', 'Django (DRF, Channels)', '*Flask', 'asyncio', 'Celery'],
    },
    {
      category: 'Frontend Ecosystem',
      items: ['*Angular (RxJS, Signals)', '*React'],
    },
    {
      category: 'Artificial Intelligence',
      items: [
        '*AI Agent Architectures',
        'RAG Systems',
        'LLMOps',
        'Prompt Engineering',
        'PyTorch',
        'TensorFlow',
      ],
    },
    {
      category: 'AI Coding Assistants',
      items: ['OpenAI Codex', '*Claude Code', 'JetBrains Junie', 'GitHub Copilot', '*Cursor'],
    },
    {
      category: 'Databases & Vector Stores',
      items: ['*PostgreSQL', 'TimescaleDB', 'pgvector', '*ChromaDB', 'Redis', 'SQLite'],
    },
    {
      category: 'DevOps & Cloud',
      items: ['*GCP', '*AWS', '*Docker', 'Kubernetes', 'Docker Swarm', 'GitHub Actions', 'CI/CD'],
    },
    {
      category: 'Observability & Tools',
      items: ['*Git', 'Prometheus', '*Grafana', 'Apache Kafka', 'Nginx'],
    },
    {
      category: 'Operating Systems',
      items: ['GNU/Linux', 'MacOS'],
    },
  ];
}
