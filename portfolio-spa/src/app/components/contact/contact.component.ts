import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Contact information
  email = 'yencardonaal@unal.edu.co';
  location = 'Manizales, Colombia';

  // Social links
  socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yeisoncardona', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/YeisonCardona', icon: 'github' },
    { name: 'DunderLab', url: 'https://github.com/DunderLab', icon: 'organization' }
  ];

  // Form data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Form submission method (placeholder)
  onSubmit() {
    console.log('Form submitted:', this.formData);
    // In a real application, this would send the form data to a backend service
    alert('Thank you for your message! This is a demo form, so no message was actually sent.');
    this.formData = { name: '', email: '', message: '' };
  }
}
