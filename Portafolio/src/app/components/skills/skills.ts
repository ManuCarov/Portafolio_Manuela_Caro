import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ DEBE ESTAR
import { Data } from '../../services/data';
import { Skills } from '../../models/skill/skill-module';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent implements OnInit {
  skills!: Skills;

  skillCategories = [
    { key: 'programming', title: 'Programación y Datos', icon: '💻' },
    { key: 'agile', title: 'Frameworks Ágiles', icon: '🔄' },
    { key: 'design', title: 'Diseño', icon: '🎨' },
    { key: 'soft', title: 'Habilidades Blandas', icon: '💡' }
  ];

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.skills = this.dataService.getSkills();
  }

  getSkillsForCategory(key: string): string[] {
    return (this.skills as any)[key] || [];
  }
}