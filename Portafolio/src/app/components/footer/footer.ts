import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { PersonalInfo } from '../../models/personal-info/personal-info-module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit {
  personalInfo!: PersonalInfo;
  currentYear: number = new Date().getFullYear();

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.personalInfo = this.dataService.getPersonalInfo();
  }
}