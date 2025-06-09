import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  // Featured projects
  projects = [
    {
      name: 'CHASKI',
      description: 'Distributed TCP/IP messaging framework',
      link: 'https://github.com/dunderlab/python-chaski',
      technologies: ['Python', 'TCP/IP', 'Messaging']
    },
    {
      name: 'BCI-Framework',
      description: 'EEG experiments and real-time visualizations',
      link: 'https://github.com/dunderlab/bci-framework',
      technologies: ['Python', 'EEG', 'Signal Processing', 'PyQt']
    },
    {
      name: 'OpenBCI-Stream',
      description: 'Streaming EEG/EMG/ECG data with Python',
      link: 'https://github.com/dunderlab/openbci-stream',
      technologies: ['Python', 'OpenBCI', 'Streaming', 'Biosignals']
    },
    {
      name: 'Radiant',
      description: 'Brython-based reactive web framework',
      link: 'https://github.com/dunderlab/python-radiantframework',
      technologies: ['Python', 'Brython', 'Web', 'Reactive']
    },
    {
      name: 'Qt-Material',
      description: 'Material Design for PyQt/PySide',
      link: 'https://github.com/dunderlab/qt-material',
      technologies: ['Python', 'PyQt', 'PySide', 'Material Design']
    }
  ];
}
