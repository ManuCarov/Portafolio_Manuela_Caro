import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Data } from '../../services/data';
import { Project } from '../../models/project/project-module';
import { Translation, Language } from '../../services/translation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent implements OnInit {
  currentLang: Language = 'es';
  projects: Project[] = [];

  constructor(
    private dataService: Data,
    private sanitizer: DomSanitizer,
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
    this.projects = this.dataService.getProjects(this.currentLang);
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}