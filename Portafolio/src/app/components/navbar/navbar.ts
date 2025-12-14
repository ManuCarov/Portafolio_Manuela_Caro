import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../services/scroll';
import { Data } from '../../services/data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  name: string = '';
  activeSection: string = 'home';
  isMenuOpen: boolean = false;

  menuItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'education', label: 'Educación' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'academic', label: 'Experiencia Académica' }
  ];

  constructor(
    private scrollService: Scroll,
    private dataService: Data
  ) {}

  ngOnInit(): void {
    this.name = this.dataService.getPersonalInfo().name;
    this.scrollService.activeSection$.subscribe(section => {
      this.activeSection = section;
    });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
    this.isMenuOpen = false;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}