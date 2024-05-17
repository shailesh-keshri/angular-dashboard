import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Input() sidebarToggle: boolean = false;

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
  }
  
}
