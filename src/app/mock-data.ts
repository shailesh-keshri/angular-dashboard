import { Project } from "./project.model";

export const PROJECTS: Project[] = [
    {
      id: 1,
      name: 'Project Alpha',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      status: 'In Progress',
      deadline: new Date('2024-06-30'),
      teamMembers: ['John Doe', 'Jane Smith', 'Alice Johnson']
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Completed',
      deadline: new Date('2024-05-15'),
      teamMembers: ['Bob Brown', 'Mary Davis']
    },
    {
      id: 3,
      name: 'Project A',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum incididunt ut labore ae dolore.',
      status: 'Pending',
      deadline: new Date('2024-05-28'),
      teamMembers: ['Bob Brown', 'Mary Davis','John Doe']
    },
    {
      id: 4,
      name: 'Project K',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'In Progress',
      deadline: new Date('2024-05-25'),
      teamMembers: ['Bob Brown', 'Mary Davis']
    },
    {
      id: 5,
      name: 'Management Dashboard',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Completed',
      deadline: new Date('2024-05-17'),
      teamMembers: ['Shailesh Keshri']
    },
    {
      id: 6,
      name: 'Project SK',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'In Progress',
      deadline: new Date('2024-05-30'),
      teamMembers: ['Bob Brown', 'Mary Davis', 'Jake', 'Willy']
    },
    // Add more mock projects as needed
  ];
  