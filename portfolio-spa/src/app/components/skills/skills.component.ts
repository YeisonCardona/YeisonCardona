import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  // Skills categories
  skillCategories = [
    {
      name: 'Languages',
      skills: ['Python', 'Bash', 'C/C++', 'VHDL', 'Verilog', 'JavaScript', 'HTML/CSS']
    },
    {
      name: 'Frameworks',
      skills: ['Django', 'FastAPI', 'Flask', 'TensorFlow', 'PyTorch', 'Keras']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Docker Swarm', 'GitHub Actions', 'GCP', 'AWS', 'Azure']
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'TimescaleDB', 'SQLite', 'MongoDB']
    },
    {
      name: 'Embedded & Hardware',
      skills: ['ESP32', 'STM32', 'Raspberry Pi', 'FPGAs (Xilinx/Altera)']
    },
    {
      name: 'UI/UX',
      skills: ['PyQt', 'PySide', 'Dash', 'Tkinter', 'wxPython']
    },
    {
      name: 'Others',
      skills: ['Kafka', 'Brython', 'Sphinx', 'FreeCAD', 'CNC', '3D Printing']
    }
  ];
}
