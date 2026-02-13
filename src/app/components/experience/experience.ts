import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Data } from '../../services/data';
import { Experience } from '../../models/experience/experience-module';
import { Translation, Language } from '../../services/translation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];
  currentLang: Language = 'es';

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
    this.experience = this.dataService.getProfessionalExperience(this.currentLang);
  }
}