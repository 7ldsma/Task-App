import { Component, OnInit, inject } from '@angular/core';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { TaskListComponent } from '../../components/task-list/task-list.component';

@Component({
  selector: 'app-general-tasks',
  standalone: true,
  imports: [ 
    TaskFormComponent, 
    TaskListComponent],
  templateUrl: './general-tasks.component.html',
  styleUrl: './general-tasks.component.css'
})
export default class GeneralTasksComponent{

    


}
