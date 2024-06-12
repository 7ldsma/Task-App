import { Component } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-regulatory-tasks',
  standalone: true,
  imports: [
    TaskFormComponent,
    TaskListComponent
  ],
  templateUrl: './regulatory-tasks.component.html',
  styleUrl: './regulatory-tasks.component.css'
})
export default class RegulatoryTasksComponent {

}
