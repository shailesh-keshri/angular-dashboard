import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { PROJECTS } from '../../mock-data';
import { Project } from '../../project.model';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css'
})
export class PieChartComponent implements OnInit{

  pieChart: any;

  projects: Project[]= PROJECTS

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.generatePieChart();
  }

  
  generatePieChart(): void {
    const pendingProjects = this.projects.filter(project => project.status === 'Pending').length;
    const inProgressProjects = this.projects.filter(project => project.status === 'In Progress').length;
    const completedProjects = this.projects.filter(project => project.status === 'Completed').length;

    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Pending', 'In Progress', 'Completed'],
        datasets: [{
          data: [pendingProjects, inProgressProjects, completedProjects],
          backgroundColor: [
            'orange',
            'skyblue',
            'green',
          ],
          borderColor: 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        // legend: {
        //   position: 'bottom'
        // }
      }
    });
  }
}
