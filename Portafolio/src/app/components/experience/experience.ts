import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Data } from '../../services/data';
import { Experience } from '../../models/experience/experience-module';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],  // ✅ DEBE ESTAR AQUÍ
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent implements OnInit {
  experience: Experience[] = [];

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.experience = this.dataService.getProfessionalExperience();
  }
}