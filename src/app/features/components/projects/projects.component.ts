import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

type ProjectMedia = Record<
  'githubUrl' | 'pypiUrl' | 'docsURL' | 'headerImage' | 'imageUrl',
  string
>;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  selectedProjectIndex = 0;

  selectedProjectMedia = signal<ProjectMedia>({
    githubUrl: 'https://github.com/dunderlab/qt-material.git',
    pypiUrl: 'https://pypi.org/project/qt-material/',
    docsURL: 'https://qt-material.readthedocs.io/en/latest/',
    headerImage: '/assets/images/projects/qtmaterial_header.png',
    imageUrl: '/assets/images/projects/qtmaterial.gif',
  });

  projectList = [
    {
      title: 'Red de Monitoreo',
      subtitle: 'Real-Time Neurocognitive Experiments in the Browser',
      description:
        'CtenoLab enables EEG and BCI paradigms directly in the browser with precise hardware synchronization, combining WebUSB/WebSerial integration and real-time control for flexible neurophysiological research.',
      technologies: [{ name: 'Angular', icon: 'devicon-angularjs-plain' }],
      githubUrl: '',
      pypiUrl: '',
      docsURL: '',
      headerImage: '/assets/images/projects/logoAne.png',
      imageUrl: '/assets/images/projects/red_ane.png',
    },
    {
      title: 'CtenoLab',
      subtitle: 'Real-Time Neurocognitive Experiments in the Browser',
      description:
        'CtenoLab enables EEG and BCI paradigms directly in the browser with precise hardware synchronization, combining WebUSB/WebSerial integration and real-time control for flexible neurophysiological research.',
      technologies: [{ name: 'Angular', icon: 'devicon-angularjs-plain' }],
      githubUrl: '',
      pypiUrl: '',
      docsURL: '',
      headerImage: '/assets/images/projects/cteno.png',
      imageUrl: '/assets/images/projects/cteno.gif',
    },
    {
      title: 'BCI-Framework',
      subtitle:
        'Distributed processing tool for stimuli delivery, experiment design and real-time visualizations with OpenBCI.',
      description:
        'Open-source platform for EEG/EMG/ECG acquisition built around OpenBCI hardware. It streams data in real time, offers distributed processing and a PySide-based interface to visualize signals and deliver stimuli. Users can design custom neurophysiological experiments and analyze biosignals through its integrated tools.',
      technologies: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Qt', icon: 'devicon-qt-original' },
        { name: 'Kafka', icon: 'devicon-apachekafka-original' },
        { name: 'Scikit-Learn', icon: 'devicon-scikitlearn-plain' },
        { name: 'Docker', icon: 'devicon-docker-plain' },
      ],
      githubUrl: 'https://github.com/dunderlab/bci-framework',
      pypiUrl: 'https://pypi.org/project/bci-framework/',
      docsURL: 'bci-framework.readthedocs.io/en/latest/',
      headerImage: '/assets/images/projects/bciframework_header.png',
      imageUrl: '/assets/images/projects/bciframework.gif',
    },

    {
      title: 'Qt-Material',
      subtitle: 'Modern stylesheet library for PySide6 and PyQt6 inspired by Material Design.',
      description:
        'Qt-Material brings Material Design stylesheets to Qt applications. It includes dark and light themes with customizable colors and fonts, supports runtime theme switching, and can export stylesheets for standalone use.',
      technologies: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Qt', icon: 'devicon-qt-original' },
        { name: 'CSS3', icon: 'devicon-css3-plain' },
      ],
      githubUrl: 'https://github.com/dunderlab/qt-material.git',
      pypiUrl: 'https://pypi.org/project/qt-material/',
      docsURL: 'https://qt-material.readthedocs.io/en/latest/',
      headerImage: '/assets/images/projects/qtmaterial_header.png',
      imageUrl: '/assets/images/projects/qtmaterial.gif',
    },

    {
      title: 'Chaski Confluent',
      subtitle: 'Advanced distributed communication framework for resilient node interactions',
      description:
        'Chaski Confluent provides asynchronous messaging, dynamic node discovery and remote method invocation to build scalable distributed systems. It supports TCP/UDP protocols, persistent storage and Celery integration for task handling.',
      technologies: [{ name: 'Python', icon: 'devicon-python-plain' }],
      githubUrl: 'https://github.com/dunderlab/python-chaski',
      pypiUrl: 'https://pypi.org/project/chaski-confluent/',
      docsURL: 'https://chaski-confluent.readthedocs.io/en/latest/',
      headerImage: '/assets/images/projects/chaski_header.png',
      imageUrl: '/assets/images/projects/chaski.png',
    },

    {
      title: 'Dunderlab - visualizations',
      subtitle: 'Brain connectivities, accuracy gain comparison, EEG and topoplot visualizations',
      description:
        'Set of tools for displaying brain connectivity and EEG information in Python. Includes circos plots, accuracy gain charts, and topoplots built on Matplotlib and MNE.',
      technologies: [
        { name: 'Python', icon: 'devicon-python-plain' },
        { name: 'Matplotlib', icon: 'devicon-matplotlib-plain' },
        { name: 'NumPy', icon: 'devicon-numpy-plain' },
        { name: 'Flask', icon: 'devicon-flask-original' },
      ],
      githubUrl: 'https://github.com/dunderlab/python-dunderlab.visualizations',
      pypiUrl: '',
      docsURL: 'https://dunderlab.readthedocs.io/projects/Visualizations/en/latest/',
      imageUrl: '/assets/images/projects/dunderlabvis.png',
      headerImage: '/assets/images/projects/dunderlabvis_header.png',
    },

    // {
    //   title: 'Radiant: A Pythonic Web Framework',
    //   subtitle:
    //     'A lightweight and Python-first framework for building web applications with Brython.',
    //   description:
    //     'Radiant allows Python developers to create full‑stack web apps entirely in Python, running code in the browser with Brython. The framework uses Tornado and Jinja2 to deliver real-time, component-based interfaces without JavaScript.',
    //   technologies: [
    //     { name: 'Python', icon: 'devicon-python-plain' },
    //     { name: 'JavaScript', icon: 'devicon-javascript-plain' },
    //   ],
    //   githubUrl: 'https://github.com/dunderlab/python-radiant_framework',
    //   pypiUrl: 'https://pypi.org/project/radiant-framework/',
    //   docsURL: 'https://radiant-framework.readthedocs.io/en/latest/',
    //   headerImage: '/assets/images/projects/radiant_header.png',
    //   imageUrl: '/assets/images/projects/radiant.png',
    // },

    // {
    //   title: 'OpenBCI-Stream',
    //   subtitle:
    //     'High level Python module for EEG/EMG/ECG acquisition and distributed streaming for OpenBCI Cyton board.',
    //   description:
    //     'Provides scripts to configure and connect to the OpenBCI Cyton board through serial or Wi-Fi. Includes a CLI and a Python API for asynchronous acquisition and remote board control via RPyC, streaming data across a network using Kafka.',
    //   imageUrl: '',
    //   technologies: [
    //     { name: 'Python', icon: 'devicon-python-plain' },
    //     { name: 'Kafka', icon: 'devicon-apachekafka-original' },
    //     { name: 'Scikit-Learn', icon: 'devicon-scikitlearn-plain' },
    //   ],
    //   githubUrl: 'https://github.com/UN-GCPDS/openbci-stream',
    //   pypiUrl: 'https://pypi.org/project/openbci-stream/',
    //   docsURL: 'https://openbci-stream.readthedocs.io/en/latest/',
    //   headerImage: '/assets/images/projects/openbcistream_header.png',
    // },

    // {
    //   title: 'Matplotlib-FigureStream',
    //   subtitle: 'A backend for serve Matplotlib animations as web streams.',
    //   description:
    //     'Matplotlib-FigureStream extends Matplotlib to broadcast live plots through a Flask server. Frames are sent as JPEG streams for real‑time browser visualization. Ideal for embedding animated graphs in web applications.',
    //   imageUrl: '',
    //   technologies: [
    //     { name: 'Python', icon: 'devicon-python-plain' },
    //     { name: 'Matplotlib', icon: 'devicon-matplotlib-plain' },
    //     { name: 'NumPy', icon: 'devicon-numpy-plain' },
    //     { name: 'Flask', icon: 'devicon-flask-original' },
    //   ],
    //   githubUrl: 'https://github.com/dunderlab/python-matplotlib-figurestream',
    //   headerImage: '/assets/images/projects/figurestream_header.png',
    //   pypiUrl: 'https://pypi.org/project/figurestream/',
    //   docsURL: 'https://figurestream.readthedocs.io/en/latest/',
    // },

    // {
    //   title: 'Pinguino IDE',
    //   subtitle: 'Open source integrated development environment',
    //   description:
    //     'Pinguino IDE is an integrated environment for developing firmware for PIC microcontrollers. Built in Python with a Qt-based interface, it offers tools to edit, compile, and upload programs to Pinguino boards.',
    //   imageUrl: '/assets/images/projects/pinguino_PIC32_OTG.jpg.webp',
    //   technologies: [
    //     { name: 'Python', icon: 'devicon-python-plain' },
    //     { name: 'Qt', icon: 'devicon-qt-original' },
    //   ],
    //   githubUrl: 'https://github.com/PinguinoIDE/pinguino-ide',
    //   headerImage: '/assets/images/projects/pinguinoide_header.png',
    //   pypiUrl: '',
    //   docsURL: '',
    // },
  ];

  onPanelOpened(index: number) {
    this.selectedProjectIndex = index;

    const project = this.projectList[index];

    this.selectedProjectMedia.set({
      githubUrl: project.githubUrl,
      pypiUrl: project.pypiUrl,
      docsURL: project.docsURL,
      headerImage: project.headerImage,
      imageUrl: project.imageUrl,
    });
  }
}
