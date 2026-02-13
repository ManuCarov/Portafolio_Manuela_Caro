import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Translation, Language } from '../../../services/translation';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrls: ['./language-selector.css']
})
export class LanguageSelector implements OnInit {
  currentLanguage: Language = 'es';

  constructor(private translation: Translation) {}

  ngOnInit(): void {
    this.translation.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleLanguage(): void {
    this.translation.toggleLanguage();
  }

  setLanguage(lang: Language): void {
    this.translation.setLanguage(lang);
  }
}
