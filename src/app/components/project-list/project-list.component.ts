import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS } from '../../mock-data';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit{

   projects: Project[] = PROJECTS;

   public filterdProjects: Project[] = PROJECTS;
   public selectedStatus: string = 'all';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){

  }

  ngOnInit(): void {
    console.log('Project List Loaded', this.projects);
  }

  filterProjectsByStatus(){

    if(this.selectedStatus === 'all'){
      this.filterdProjects = this.projects;
    }else{
      this.filterdProjects = this.projects.filter(project => project.status.toLowerCase() === this.selectedStatus);
    }
  }

  viewDetails(project: Project) {
    // if (this.route.snapshot.url[0]?.path === 'dashboard') {
    //   this.router.navigate(['/projects', 'project', project.id]);
    // } else {
    //   this.router.navigate(['project', project.id], { relativeTo: this.route });
    // }
    this.router.navigate(['project', project.id]);
  }
}
