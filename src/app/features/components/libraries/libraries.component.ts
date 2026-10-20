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
      labels: ['AI Agent Framework'],

      githubUrl: 'https://github.com/dunderlab/bci-framework',
      pypiUrl: 'https://pypi.org/project/bci-framework/',
      docsURL: 'bci-framework.readthedocs.io/en/latest/',
      imageUrl: '/assets/images/projects/bciframework.gif',

      headerImage: '/assets/images/projects/logoAne.png',
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
  ];

  onPanelOpened(index: number) {
    this.selectedProjectIndex = index;

    const project = this.libraryList[index];

    this.selectedProjectMedia.set({
      githubUrl: project.githubUrl,
      pypiUrl: project.pypiUrl,
      docsURL: project.docsURL,
      headerImage: project.headerImage,
      sampleScript: project.sampleScript,
    });
  }
}
