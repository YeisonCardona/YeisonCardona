import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from '../../../core/components/page/page.component';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from '@angular/material/expansion';
import { MatButton } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';

import { CodeBlockComponent } from '../../../core/components/code-block/code-block.component';

type ProjectMedia = Record<
  'githubUrl' | 'pypiUrl' | 'docsURL' | 'headerImage' | 'sampleScript',
  string
>;

@Component({
  selector: 'app-libraries',
  standalone: true,
  imports: [
    CommonModule,
    PageComponent,
    MatAccordion,
    MatButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatCardHeader,
    MatCardTitle,
    MatChip,
    MatChipSet,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    CodeBlockComponent,
  ],
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.scss'],
})
export class LibrariesComponent {
  selectedProjectIndex = 0;

  selectedProjectMedia = signal<ProjectMedia>({
    githubUrl: '',
    pypiUrl: '',
    docsURL: '',
    headerImage: '',
    sampleScript: '',
  });

  libraryList = [
    {
      title: 'DEER',
      subtitle: 'Deterministic Executable Engine for Runtime Agents',
      description:
        'DEER is a professional-grade framework designed to transform LLMs from probabilistic text-generators into Deterministic Autonomous Engineers. While other frameworks rely on massive, fragile system prompts and hope for the best, DEER subordinates the LLM to a rigid, code-defined execution pipeline where every action is typed, validated, and physically verified.',
      labels: ['AI Agent Framework', 'OpenAI', 'Gemini', 'LLaMA'],

      githubUrl: 'https://github.com/dunderlab/deer-agent-framework',
      pypiUrl: 'https://pypi.org/project/deer-agent-framework/',
      docsURL: '',
      headerImage: '',
      sampleScript:
        'from pathlib import Path\n' +
        'from deer.core.agent import DeterministicAgent\n' +
        'from deer.memory import VectorMemory\n' +
        'from deer.drivers import OllamaLocalDriver\n' +
        'from deer.tools import ToolRegistry\n' +
        'from deer.tools.presets import Preset\n' +
        '\n' +
        '# Infrastructure\n' +
        'driver = OllamaLocalDriver(model_name="llama3")\n' +
        'knowledge = VectorMemory(path="./agent_knowledge")\n' +
        'registry = ToolRegistry(Preset.CODE_REPAIR | Preset.CODE_EDITOR | Preset.DATA_ANALYST)\n' +
        '\n' +
        'agent = DeterministicAgent(\n' +
        '    description="Python Architecture Specialist",\n' +
        '    identity=(\n' +
        '        "You are a Principal Python Architect. You possess authoritative expertise "\n' +
        '        "in advanced module resolution and dependency management."\n' +
        '    ),\n' +
        '    driver=driver,\n' +
        '    knowledge=knowledge,\n' +
        '    tool_registry=registry,\n' +
        '    jail_path=Path.cwd() / "sandbox",\n' +
        '    max_attempts=5,\n' +
        ')\n' +
        '\n' +
        'if __name__ == "__main__":\n' +
        '    # Run a deterministic goal\n' +
        '    result = agent.run("Create a project structure for a data processor")\n' +
        '    print(result)',
    },
    {
      title: 'Radiant',
      subtitle: 'Unified Python and Brython Runtime',
      description:
        'Radiant is a single-file runtime bridge that blurs the line between server and browser. It encapsulates your entire stack into a single Python script, allowing you to write frontend logic with Brython as if it were running natively in the browser, while maintaining a transparent connection to the backend.',
      labels: ['AI Agent Framework', 'OpenAI', 'Gemini', 'LLaMA'],

      githubUrl: 'https://github.com/dunderlab/radiant-runtime-bridge',
      pypiUrl: 'https://pypi.org/project/radiant-runtime-bridge/',
      docsURL: '',
      headerImage: '',
      sampleScript:
        '# Base class that binds the Python server with the Brython frontend\n' +
        'from radiant import BrythonServer\n' +
        '\n' +
        '\n' +
        'class App(BrythonServer):\n' +
        '    # Application entry point.\n' +
        '    # Inherits the Radiant runtime that exposes HTML primitives and the browser document.\n' +
        '\n' +
        '    def __init__(self):\n' +
        '        # This code runs in the browser via Brython, \n' +
        '        # but is defined in the same script as your server logic.\n' +
        '        self.document <= self.html.H1("Radiant · Python Runtime Bridge")\n' +
        '        self.document <= self.html.P(\n' +
        '            "This application connects a Python backend with a Brython-powered frontend "\n' +
        '            "through a unified runtime."\n' +
        '        )\n' +
        '\n' +
        '        \n' +
        'if __name__ == "__main__":\n' +
        '    # Start the embedded HTTP server with default address and port\n' +
        '    App.serve()\n' +
        '\n' +
        '    # Alternative explicit binding\n' +
        '    # App.serve(ip="127.0.0.1", port=8080)',
    },
    // {
    //   title: 'Chaski Confluent',
    //   subtitle: 'Advanced distributed communication framework for resilient node interactions',
    //   description:
    //     'Chaski Confluent provides asynchronous messaging, dynamic node discovery and remote method invocation to build scalable distributed systems. It supports TCP/UDP protocols, persistent storage and Celery integration for task handling.',
    //   technologies: [{ name: 'Python', icon: 'devicon-python-plain' }],
    //   githubUrl: 'https://github.com/dunderlab/python-chaski',
    //   pypiUrl: 'https://pypi.org/project/chaski-confluent/',
    //   docsURL: 'https://chaski-confluent.readthedocs.io/en/latest/',
    //   headerImage: '/assets/images/projects/chaski_header.png',
    //   imageUrl: '/assets/images/projects/chaski.png',
    //   sampleScript: '',
    // },
    {
      title: 'OpenBCI Stream',
      subtitle:
        'High level Python module for EEG/EMG/ECG acquisition and distributed streaming for OpenBCI Cyton board.',
      description:
        'A standalone driver library for Cyton boards (supporting RFduino and Wi-Fi Shield) offering three control interfaces: CLI, an asynchronous Python module, and RPyC for remote distributed execution. Its architecture leverages Kafka to split continuous neurophysiological data streams and event markers into dedicated topics, enabling efficient real-time, distributed access backed by a shared RTP server for network-wide time synchronization.',
      labels: ['AI Agent Framework', 'OpenAI', 'Gemini', 'LLaMA'],

      githubUrl: 'https://github.com/dunderlab/openbci-stream',
      pypiUrl: 'https://pypi.org/project/openbci-stream/',
      docsURL: '',
      headerImage: '',
      sampleScript:
        'from openbci_stream.acquisition import Cyton\n' +
        '\n' +
        "openbci = Cyton('wifi', endpoint='192.68.1.113', capture_stream=True)\n" +
        'openbci.stream(15) # collect data for 15 seconds\n' +
        '\n' +
        '# asynchronous call\n' +
        'openbci.start_stream()\n' +
        'time.sleep(15)  # collect data for 15 seconds\n' +
        'openbci.stop_stream()',
    },
    {
      title: 'Qt-Material',
      subtitle: 'Material Design Stylesheet Library for PySide & PyQt',
      description:
        'An open-source theme engine that brings Google Material Design to Python Qt desktop applications. Supports dynamic runtime theme switching, custom color palettes, density controls, and exportable stylesheets for PySide6, PyQt6, and PyQt5.',
      technologies: ['Python', 'Qt', 'CSS3'],
      githubUrl: 'https://github.com/dunderlab/qt-material.git',
      pypiUrl: 'https://pypi.org/project/qt-material/',
      docsURL: 'https://qt-material.readthedocs.io/en/latest/',
      headerImage: '/assets/images/projects/qtmaterial_header.png',
      imageUrl: '/assets/images/projects/qtmaterial.gif',
      sampleScript:
        'import sys\n' +
        'from PySide6 import QtWidgets\n' +
        'from qt_material import apply_stylesheet\n' +
        '\n' +
        '# Create application instance and main window\n' +
        'app = QtWidgets.QApplication(sys.argv)\n' +
        'window = QtWidgets.QMainWindow()\n' +
        '\n' +
        '# Apply a built-in theme\n' +
        "apply_stylesheet(app, theme='dark_teal.xml')\n" +
        '\n' +
        '# Show the window and execute\n' +
        'window.show()\n' +
        'app.exec()',
    },

    {
      title: 'Dunderlab - Visualizations',
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
      sampleScript:
        'from dunderlab.visualizations.connectivities import CircosConnectivity, interact_connectivity\n' +
        'import numpy as np\n' +
        'from matplotlib import pyplot as plt\n' +
        '\n' +
        "channels = ['Fp2', 'C4', 'T4', 'T6', 'O2', 'O1', 'T3', 'T5', 'C3', 'Fp1']\n" +
        'areas = {\n' +
        "    'Frontal': ['Fp2'],\n" +
        "    'Central': ['C4'],\n" +
        "    'Temporal': ['T4', 'T6'],\n" +
        "    'Occipital': ['O2'],\n" +
        '\n' +
        "    'Occipital_': ['O1'],\n" +
        "    'Temporal_': ['T5', 'T3'],\n" +
        "    'Central_': ['C3'],\n" +
        "    'Frontal_': ['Fp1'],\n" +
        '}\n' +
        '\n' +
        'N = len(channels)  # number of EEG channels\n' +
        '\n' +
        '# Compute the number of unique undirected connections\n' +
        'n_connections = N * (N - 1) // 2\n' +
        '\n' +
        '# Generate random connectivity values as a 1D vector\n' +
        'np.random.seed(0)\n' +
        'connectivities_v = np.random.normal(size=n_connections)\n' +
        '\n' +
        'CircosConnectivity(connectivities_v, channels, areas)\n',
    },
  ];

  onPanelOpened(index: number) {
    this.selectedProjectIndex = index;

    const project = this.libraryList[index];

    console.log(project);

    this.selectedProjectMedia.set({
      githubUrl: project.githubUrl ?? '',
      pypiUrl: project.pypiUrl ?? '',
      docsURL: project.docsURL ?? '',
      headerImage: project.headerImage ?? '',
      sampleScript: project.sampleScript ?? '',
    });
  }
}
