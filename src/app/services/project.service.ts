import { Injectable } from '@angular/core';
import { Project } from '../project.model';
import { PROJECTS } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  
  getProjectById(id: number): Project | undefined {
    return PROJECTS.find(project => project.id === id);
  }

}
