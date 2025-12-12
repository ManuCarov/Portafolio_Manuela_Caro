// ===== hero.component.ts =====
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { PersonalInfo } from '../../models/personal-info/personal-info-module';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
  personalInfo!: PersonalInfo;

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.personalInfo = this.dataService.getPersonalInfo();
  }
}


