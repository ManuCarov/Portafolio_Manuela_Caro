import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent implements OnInit {
  summary: string = '';

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.summary = this.dataService.getPersonalInfo().summary;
  }
}

