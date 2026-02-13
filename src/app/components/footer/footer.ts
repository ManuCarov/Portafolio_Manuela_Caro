import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { PersonalInfo } from '../../models/personal-info/personal-info-module';
import { Translation} from '../../services/translation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  heroRole: string = '';
  personalInfo!: PersonalInfo;
  currentYear: number = new Date().getFullYear();

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