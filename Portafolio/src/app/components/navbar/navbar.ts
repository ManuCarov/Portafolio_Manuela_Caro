import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Scroll } from '../../services/scroll';
import { Data } from '../../services/data';
import { Translation } from '../../services/translation';
import { LanguageSelector } from '../language/language-selector/language-selector';

interface MenuItem {
  id: string;
  labelKey: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, LanguageSelector],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {
  name: string = '';
  activeSection: string = 'home';
  isMenuOpen: boolean = false;

  menuItems: MenuItem[] = [
    { id: 'home', labelKey: 'navbar.home' },
    { id: 'about', labelKey: 'navbar.about' },
    { id: 'education', labelKey: 'navbar.education' },
    { id: 'experience', labelKey: 'navbar.experience' },
    { id: 'skills', labelKey: 'navbar.skills' },
    { id: 'projects', labelKey: 'navbar.projects' },
    { id: 'academic', labelKey: 'navbar.academic' }
  ];

  constructor(
    private scrollService: Scroll,
    private dataService: Data,
    public translationService: Translation
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

  getLabel(labelKey: string): string {
    return this.translationService.translate(labelKey);
  }
}