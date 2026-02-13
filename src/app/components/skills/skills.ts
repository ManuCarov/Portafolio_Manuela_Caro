import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Data } from '../../services/data';
import { Skills } from '../../models/skill/skill-module';
import { Translation, Language } from '../../services/translation';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  skills!: Skills;
  currentLang: Language = 'es';

  skillCategories = [
    { key: 'programming', title: 'Programación y Datos', icon: '💻' },
    { key: 'agile', title: 'Frameworks Ágiles', icon: '🔄' },
    { key: 'design', title: 'Diseño', icon: '🎨' },
    { key: 'soft', title: 'Habilidades Blandas', icon: '💡' }
  ];

  constructor(
    private dataService: Data,
    public translationService: Translation
  ) {}

  ngOnInit(): void {
    this.loadData();
    
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLang = lang;
      this.loadData();
    });
  }

  loadData(): void {
    this.skills = this.dataService.getSkills(this.currentLang);
    this.updateCategories();
  }

  updateCategories(): void {
    this.skillCategories = [
      { 
        key: 'programming', 
        title: this.translationService.translate('skillCategories.programming'),
        icon: '💻' 
      },
      { 
        key: 'agile', 
        title: this.translationService.translate('skillCategories.agile'),
        icon: '🔄' 
      },
      { 
        key: 'design', 
        title: this.translationService.translate('skillCategories.design'),
        icon: '🎨' 
      },
      { 
        key: 'soft', 
        title: this.translationService.translate('skillCategories.soft'),
        icon: '💡' 
      }
    ];
  }

  getSkillsForCategory(key: string): string[] {
    return (this.skills as any)[key] || [];
  }
}