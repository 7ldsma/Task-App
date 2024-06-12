import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  editTask( task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index > -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleCompletion(task: Task): void {
    task.completed = !task.completed;
  }


}
