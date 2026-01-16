import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Education } from '../../models/education/education-module';
import { Translation, Language } from '../../services/translation';


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];
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
    this.education = this.dataService.getEducation(this.currentLang);
  }
}