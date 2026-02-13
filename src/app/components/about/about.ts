import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Translation, Language } from '../../services/translation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  summary: string = '';
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
    this.summary = this.dataService.getPersonalInfo(this.currentLang).summary;
  }
}

