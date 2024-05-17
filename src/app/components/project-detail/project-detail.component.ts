import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit{

  @Input() project: Project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
  ){}


  ngOnInit(): void {
    console.log('detail page');
    this.route.params.subscribe(params => {
      const projectId = +params['id'];
      this.project = this.projectService.getProjectById(projectId); 
      console.log('details', this.project);
    });
  }


}
