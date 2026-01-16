// ===== hero.component.ts =====
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { PersonalInfo } from '../../models/personal-info/personal-info-module';
import { Translation } from '../../services/translation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  heroRole: string = '';
  personalInfo!: PersonalInfo;

  constructor(
    private dataService: Data,
    public translationService: Translation
  ) {}

  ngOnInit(): void {
    this.personalInfo = this.dataService.getPersonalInfo();
    this.updateTranslations();
    
    this.translationService.currentLanguage$.subscribe(() => {
      this.updateTranslations();
    });
  }

  updateTranslations(): void {
    this.heroRole = this.translationService.translate('hero.role');
  }
}


