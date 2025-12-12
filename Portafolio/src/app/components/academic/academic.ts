import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Experience } from '../../models/experience/experience-module';

@Component({
  selector: 'app-academic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic.html',
  styleUrls: ['./academic.css']
})
export class AcademicComponent implements OnInit {
  academicExperience: Experience[] = [];

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.academicExperience = this.dataService.getAcademicExperience();
  }
}