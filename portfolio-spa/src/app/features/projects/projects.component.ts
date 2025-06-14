import { Component } from '@angular/core';
import {ProjectComponent} from '../../core/components/project/project.component';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectComponent,
    MatGridListModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  projectList = [

    {
      title: "BCI-Framework",
      subtitle: "Distributed processing tool for stimuli delivery, experiment design and real-time visualizations with OpenBCI.",
      description: "Open-source platform for EEG/EMG/ECG acquisition built around OpenBCI hardware. It streams data in real time, offers distributed processing and a PySide-based interface to visualize signals and deliver stimuli. Users can design custom neurophysiological experiments and analyze biosignals through its integrated tools.",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
        "devicon-apachekafka-original",
        "devicon-scikitlearn-plain",
        "devicon-docker-plain",
      ],
      githubUrl: "https://github.com/dunderlab/bci-framework",
      pypiUrl: "https://pypi.org/project/bci-framework/",
      docsURL: "bci-framework.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/bciframework_header.png",
      imageUrl: "/assets/images/projects/bciframework.gif",
      col: "col-6"
    },

    {
      title: "Qt-Material",
      subtitle: "Modern stylesheet library for PySide6 and PyQt6 inspired by Material Design.",
      description: "Qt-Material brings Material Design stylesheets to Qt applications. It includes dark and light themes with customizable colors and fonts, supports runtime theme switching, and can export stylesheets for standalone use.",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
        "devicon-css3-plain",
      ],
      githubUrl: "https://github.com/dunderlab/qt-material.git",
      pypiUrl: "https://pypi.org/project/qt-material/",
      docsURL: "https://qt-material.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/qtmaterial_header.png",
      imageUrl: "/assets/images/projects/qtmaterial.gif",
      col: "col-6"
    },

    {
      title: "Chaski Confluent",
      subtitle: "Advanced distributed communication framework for resilient node interactions",
      description: "Chaski Confluent provides asynchronous messaging, dynamic node discovery and remote method invocation to build scalable distributed systems. It supports TCP/UDP protocols, persistent storage and Celery integration for task handling.",
      technologies:[
        "devicon-python-plain",
        ],
      githubUrl: "https://github.com/dunderlab/python-chaski",
      pypiUrl: "https://pypi.org/project/chaski-confluent/",
      docsURL: "https://chaski-confluent.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/chaski_header.png",
      imageUrl: "/assets/images/projects/chaski.png",
      col: "col-6"
    },

    {
      title: "Dunderlab - visualizations",
      subtitle: "Brain connectivities, accuracy gain comparison, EEG and topoplot visualizations",
      description: "Set of tools for displaying brain connectivity and EEG information in Python. Includes circos plots, accuracy gain charts, and topoplots built on Matplotlib and MNE.",
      technologies: [
        "devicon-python-plain",
        "devicon-matplotlib-plain",
        "devicon-numpy-plain",
        "devicon-flask-original",
      ],
      githubUrl: "https://github.com/dunderlab/python-dunderlab.visualizations",
      pypiUrl: "",
      docsURL: "https://dunderlab.readthedocs.io/projects/Visualizations/en/latest/",
      imageUrl: "/assets/images/projects/dunderlabvis.png",
      headerImage: "/assets/images/projects/dunderlabvis_header.png",
      col: "col-6"
    },

    {
      title: "Radiant: A Pythonic Web Framework",
      subtitle: "A lightweight and Python-first framework for building web applications with Brython.",
      description: "Radiant allows Python developers to create full‑stack web apps entirely in Python, running code in the browser with Brython. The framework uses Tornado and Jinja2 to deliver real-time, component-based interfaces without JavaScript.",
      technologies: [
        "devicon-python-plain",
        "devicon-javascript-plain",
      ],
      githubUrl: "https://github.com/dunderlab/python-radiant_framework",
      pypiUrl: "https://pypi.org/project/radiant-framework/",
      docsURL: "https://radiant-framework.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/radiant_header.png",
      imageUrl: "/assets/images/projects/radiant.png",
      col: "col-6"
    },

    {
      title: "DunderLab's Documentation Guide",
      subtitle: "Preconfigured toolkit for building Sphinx docs from notebooks.",
      description: "Python module that automates Sphinx documentation directly from Jupyter notebooks using nbsphinx and Jupytext. Includes custom styles, automatic README generation, and Docker-based commands for building and serving docs.",
      technologies: [
        "devicon-python-plain",
        "devicon-jupyter-plain",
        "devicon-docker-plain",
        "devicon-latex-original",
      ],
      githubUrl: "https://github.com/dunderlab/python-dunderlab.docs",
      pypiUrl: "https://pypi.org/project/dunderlab-docs/",
      docsURL: "https://dunderlab-docs.readthedocs.io/en/latest/",
      imageUrl: "/assets/images/projects/dunderlabdocs.png",
      headerImage: "/assets/images/projects/dunderlabdocs_header.png",
      col: "col-6"
    },


    {
      title: "OpenBCI-Stream",
      subtitle: "High level Python module for EEG/EMG/ECG acquisition and distributed streaming for OpenBCI Cyton board.",
      description: "Provides scripts to configure and connect to the OpenBCI Cyton board through serial or Wi-Fi. Includes a CLI and a Python API for asynchronous acquisition and remote board control via RPyC, streaming data across a network using Kafka.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-apachekafka-original",
        "devicon-scikitlearn-plain",
      ],
      githubUrl: "https://github.com/UN-GCPDS/openbci-stream",
      pypiUrl: "https://pypi.org/project/openbci-stream/",
      docsURL: "https://openbci-stream.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/openbcistream_header.png",
      col: "col-4"
    },

    {
      title: "TimeScaleDB App",
      subtitle: "Django-based API for time-series data",
      description: "Provides endpoints and tools to manage Source, Measure, Channel, and TimeSerie models using RealTimeDB on PostgreSQL. Includes custom pagination, batch creation, and aggregation features for efficient time-series analysis.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-django-plain",
        "devicon-postgresql-plain",
        "devicon-openapi-plain",
        "devicon-swagger-plain",
      ],
      githubUrl: "https://github.com/dunderlab/python-django-timescaledbapp",
      pypiUrl: "https://pypi.org/project/dunderlab-timescaledbapp/",
      docsURL: "https://timescaledb-app.readthedocs.io/en/latest/",
      headerImage: "/assets/images/projects/timescaledbapp_header.png",
      col: "col-4"
    },

    {
      title: "Foundation",
      subtitle: "Tools for managing Docker-based workers",
      description: "Provides utilities to orchestrate worker services in Docker Swarm, offering a Radiant-based web interface and scripts for logging and monitoring. Includes sample workers like a Django TimescaleDB API and other Brython/Python examples.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-docker-plain",
        "Radiant Framework",
        "devicon-django-plain",
        "devicon-djangorest-plain",
        "devicon-postgresql-plain",
        "devicon-openapi-plain",
        "devicon-swagger-plain",
      ],
      githubUrl: "https://github.com/dunderlab/python-dunderlab.foundation",
      pypiUrl: "",
      docsURL: "",
      headerImage: "/assets/images/projects/foundation_header.png",
      col: "col-4"
    },

    {
      title: "Pinguino IDE",
      subtitle: "Open source integrated development environment",
      description: "Pinguino IDE is an integrated environment for developing firmware for PIC microcontrollers. Built in Python with a Qt-based interface, it offers tools to edit, compile, and upload programs to Pinguino boards.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
      ],
      githubUrl: "https://github.com/PinguinoIDE/pinguino-ide",
      headerImage:  "/assets/images/projects/pinguinoide_header.png",
      col: "col-6",
      pypiUrl: "",
      docsURL: "",
    },

    {
      title: "Matplotlib-FigureStream",
      subtitle: "A backend for serve Matplotlib animations as web streams.",
      description: "Matplotlib-FigureStream extends Matplotlib to broadcast live plots through a Flask server. Frames are sent as JPEG streams for real‑time browser visualization. Ideal for embedding animated graphs in web applications.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-matplotlib-plain",
        "devicon-numpy-plain",
        "devicon-flask-original",
      ],
      githubUrl: "https://github.com/dunderlab/python-matplotlib-figurestream",
      headerImage: "/assets/images/projects/figurestream_header.png",
      col: "col-6",
      pypiUrl: "https://pypi.org/project/figurestream/",
      docsURL: "https://figurestream.readthedocs.io/en/latest/",
    }

  ]

}
