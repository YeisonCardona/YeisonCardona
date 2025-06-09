import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  // About component properties
  name = 'Yeison N. Cardona A.';
  title = 'MSc in Industrial Automation | Electronic Engineer | Software Developer | BCI Researcher';
  about = `I'm an Electronic Engineer and MSc in Industrial Automation, currently pursuing a PhD at Universidad Nacional de Colombia, where I also teach Digital Signal Processing. I specialize in Brain-Computer Interfaces (BCI), software-defined radio, and embedded systems, focusing on the integration of hardware and software for scientific and industrial applications.`;
  experience = `With 10+ years of Python experience, I work across:
  - Neurotechnology, BCI & Signal Processing
  - Desktop, API & Web Application Development
  - Containerized Environments & CI/CD Pipelines
  - Embedded Systems & FPGA-based Designs`;

  // Current roles
  roles = [
    'Adjunct Professor – Universidad Nacional de Colombia (DSP course)',
    'Researcher – BCI, SDR & Neurotechnology Projects',
    'Technical Lead – Microservices and Cloud Architectures @ Disered'
  ];

  // Languages
  languages = [
    { language: 'Spanish', level: 'Native' },
    { language: 'English', level: 'Advanced (C1)' }
  ];

  // Contact information
  email = 'yencardonaal@unal.edu.co';
  location = 'Manizales, Colombia';

  // Social links
  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yeisoncardona', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/YeisonCardona', icon: 'github' },
    { name: 'Website', url: 'https://github.com/DunderLab', icon: 'link' }
  ];
}
