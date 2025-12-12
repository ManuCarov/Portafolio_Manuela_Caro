import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';
import { Education } from '../../models/education/education-module';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent implements OnInit {
  education: Education[] = [];

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.education = this.dataService.getEducation();
  }
}