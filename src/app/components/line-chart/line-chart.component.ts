import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { Project } from '../../project.model';
import { PROJECTS } from '../../mock-data';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit, AfterViewInit{

  lineChart: any;

  projects: Project[]= PROJECTS;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.generateLineChart();
  }

  generateLineChart(): void {
    const labels = this.projects.map(project => project.name);
    const statusData = this.projects.map(project => {
      switch (project.status) {
        case 'Pending':
          return 1;
        case 'In Progress':
          return 2;
        case 'Completed':
          return 3;
        default:
          return 0;
      }
    });
    
    const teamMembersData = this.projects.map(project => project.teamMembers.length);
  
    this.lineChart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Project Status',
            data: statusData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true
          },
          {
            label: 'Number of Team Members',
            data: teamMembersData,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              callback: function(value:any) {
                if (value % 1 === 0) {
                  return value; // Display all integer values
                }
                return '';
              }
            }
          }
        },
        plugins: {
          tooltip: {
            callbacks:{
              label: function (value: any){
                const datasetIndex = value.datasetIndex;
                const index = value.dataIndex;
                if(datasetIndex === 0){
                  switch(value.raw){
                    case 1:
                      return 'Pending'
                    case 2:
                      return 'In Progress'
                    case 3:
                      return 'Completed'
                    default:
                      return ''
                  }
                }else if(datasetIndex === 1){
                  return `Team Members: ${value.raw}`
                }
                return '';
              }
            }
          }
        }
      }
    });
  }
  
  // generateLineChart(): void {

  //   const labels = this.projects.map(project => project.name);
  //   const data = this.projects.map(project => {
  //     switch (project.status) {
  //       case 'Pending':
  //         return 1;
  //       case 'In Progress':
  //         return 2;
  //       case 'Completed':
  //         return 3;
  //       default:
  //         return 0;
  //     }
  //   });

  //   this.lineChart = new Chart('lineChart', {
  //     type: 'line',
  //     data: {
  //       labels: labels,
  //       datasets: [{
  //         label: 'Project Status',
  //         data: data,
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1,
  //         fill: true
  //       }]
  //     },
  //     options: {
  //       responsive: true,
  //       maintainAspectRatio: false,
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //           ticks: {
  //             stepSize: 1,
  //             callback: function(value) {
  //               switch (value) {
  //                 case 1:
  //                   return 'Pending';
  //                 case 2:
  //                   return 'In Progress';
  //                 case 3:
  //                   return 'Completed';
  //                 default:
  //                   return '';
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

}
