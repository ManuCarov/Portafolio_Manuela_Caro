import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'es' | 'en';

export interface Translations {
  // Navbar
  navbar: {
    home: string;
    about: string;
    education: string;
    experience: string;
    skills: string;
    projects: string;
    academic: string;
  };
  // Hero
  hero: {
    role: string;
  };
  // Sections
  sections: {
    aboutTitle: string;
    educationTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    projectsTitle: string;
    academicTitle: string;
  };
  // Skills categories
  skillCategories: {
    programming: string;
    agile: string;
    design: string;
    soft: string;
  };
  // Projects
  projects: {
    featured: string;
    viewDemo: string;
    github: string;
  };
  // Footer
  footer: {
    rights: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class Translation {
  private currentLanguageSubject = new BehaviorSubject<Language>('es');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Record<Language, Translations> = {
    es: {
      navbar: {
        home: 'Inicio',
        about: 'Sobre Mí',
        education: 'Educación',
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        academic: 'Experiencia Académica'
      },
      hero: {
        role: 'Ingeniera de Sistemas | Scrum Master | Analista de Datos | UX/UI Designer'
      },
      sections: {
        aboutTitle: 'Sobre Mí',
        educationTitle: 'Educación',
        experienceTitle: 'Experiencia Profesional',
        skillsTitle: 'Habilidades',
        projectsTitle: 'Proyectos',
        academicTitle: 'Experiencia Académica'
      },
      skillCategories: {
        programming: 'Programación y Datos',
        agile: 'Frameworks Ágiles',
        design: 'Diseño',
        soft: 'Habilidades Blandas'
      },
      projects: {
        featured: '⭐ Destacado',
        viewDemo: 'Ver Demo',
        github: 'GitHub'
      },
      footer: {
        rights: 'Todos los derechos reservados'
      }
    },
    en: {
      navbar: {
        home: 'Home',
        about: 'About Me',
        education: 'Education',
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        academic: 'Academic Experience'
      },
      hero: {
        role: 'Systems Engineer | Scrum Master | Data Analyst | UX/UI Designer'
      },
      sections: {
        aboutTitle: 'About Me',
        educationTitle: 'Education',
        experienceTitle: 'Professional Experience',
        skillsTitle: 'Skills',
        projectsTitle: 'Projects',
        academicTitle: 'Academic Experience'
      },
      skillCategories: {
        programming: 'Programming & Data',
        agile: 'Agile Frameworks',
        design: 'Design',
        soft: 'Soft Skills'
      },
      projects: {
        featured: '⭐ Featured',
        viewDemo: 'View Demo',
        github: 'GitHub'
      },
      footer: {
        rights: 'All rights reserved'
      }
    }
  };

  constructor() {
    if (this.isBrowser()) {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
        this.currentLanguageSubject.next(savedLang);
      }
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(lang: Language): void {
    this.currentLanguageSubject.next(lang);
    localStorage.setItem('language', lang);
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang: Language = currentLang === 'es' ? 'en' : 'es';
    this.setLanguage(newLang);
  }

  getTranslations(): Translations {
    return this.translations[this.getCurrentLanguage()];
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.getCurrentLanguage()];
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    
    return value;
  }
}