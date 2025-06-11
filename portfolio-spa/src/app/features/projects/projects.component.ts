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
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
        "devicon-apachekafka-original",
        "devicon-scikitlearn-plain",
        "devicon-docker-plain",
      ],
      githubUrl: "https://github.com/UN-GCPDS/bci-framework",
      headerImage: "",
      col: "col-6"
    },

    {
      title: "Chaski Confluent",
      subtitle: "Advanced distributed communication framework for resilient node interactions",
      description: "Chaski Confluent provides asynchronous messaging, dynamic node discovery and remote method invocation to build scalable distributed systems. It supports TCP/UDP protocols, persistent storage and Celery integration for task handling.",
      imageUrl: "",
      technologies:[
        "devicon-python-plain",
        ],
      githubUrl: "https://github.com/dunderlab/python-chaski",
      headerImage: "",
      col: "col-6"
    },

    {
      title: "Qt-Material",
      subtitle: "Modern stylesheet library for PySide6 and PyQt6 inspired by Material Design.",
      description: "Qt-Material brings Material Design stylesheets to Qt applications. It includes dark and light themes with customizable colors and fonts, supports runtime theme switching, and can export stylesheets for standalone use.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-qt-original",
        "devicon-css3-plain",
      ],
      githubUrl: "https://github.com/dunderlab/qt-material.git",
      headerImage: "",
      col: "col-6"
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
      headerImage: "",
      col: "col-6"
    },

    {
      title: "Radiant: A Pythonic Web Framework",
      subtitle: "A lightweight and Python-first framework for building web applications with Brython.",
      description: "Radiant allows Python developers to create full‑stack web apps entirely in Python, running code in the browser with Brython. The framework uses Tornado and Jinja2 to deliver real-time, component-based interfaces without JavaScript.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-javascript-plain",
      ],
      githubUrl: "https://github.com/dunderlab/python-radiant_framework",
      headerImage: "",
      col: "col-6"
    },

    {
      title: "DunderLab's Documentation Guide",
      subtitle: "Preconfigured toolkit for building Sphinx docs from notebooks.",
      description: "Python module that automates Sphinx documentation directly from Jupyter notebooks using nbsphinx and Jupytext. Includes custom styles, automatic README generation, and Docker-based commands for building and serving docs.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-jupyter-plain",
        "devicon-docker-plain",
        "devicon-latex-original",
      ],
      githubUrl: "https://github.com/dunderlab/python-dunderlab.docs",
      headerImage: "",
      col: "col-6"
    },

    {
      title: "Dunderlab - visualizations",
      subtitle: "Brain connectivities, accuracy gain comparison, EEG and topoplot visualizations",
      description: "Set of tools for displaying brain connectivity and EEG information in Python. Includes circos plots, accuracy gain charts, and topoplots built on Matplotlib and MNE.",
      imageUrl: "",
      technologies: [
        "devicon-python-plain",
        "devicon-matplotlib-plain",
        "devicon-numpy-plain",
        "devicon-flask-original",
      ],
      githubUrl: "https://github.com/dunderlab/python-dunderlab.visualizations",
      headerImage: "",
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
      headerImage: "",
      col: "col-6"
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
      headerImage: "",
      col: "col-6"
    }







    //
    // {
    //   title: "",
    //   subtitle: "",
    //   description: "",
    //   imageUrl: "",
    //   technologies: [],
    //   githubUrl: "",
    //   headerImage: "",
    //   col: "col-6"
    // }


  ]





}
