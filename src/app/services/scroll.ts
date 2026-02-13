import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Scroll {
  private activeSectionSubject = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSectionSubject.asObservable();

  constructor() {
    this.initScrollListener();
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.activeSectionSubject.next(sectionId);
    }
  }

  private initScrollListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        this.updateActiveSection();
      });
    }
  }

  private updateActiveSection(): void {
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'academic'];
    const scrollPosition = window.pageYOffset + 150;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          this.activeSectionSubject.next(sectionId);
          break;
        }
      }
    }
  }

  getActiveSection(): string {
    return this.activeSectionSubject.value;
  }
}