import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Experience } from '../../models/experience/experience-module';
import { Translation, Language } from '../../services/translation';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic.html',
  styleUrls: ['./academic.css']
})
export class AcademicComponent implements OnInit {
  currentLang: Language = 'es';
  academicExperience: Experience[] = [];

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
    this.academicExperience = this.dataService.getAcademicExperience(this.currentLang);
  }

}