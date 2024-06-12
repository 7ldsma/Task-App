import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../../interfaces/task';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent  implements OnInit{

  private taskService = inject(TaskService);

  tasks: Task[] = this.taskService.getTasks();

  taskToEdit: Task | null = null;


  public editTaskForm: FormGroup = this.fb.group({
    
    title: ['', [ Validators.required, Validators.minLength(3) ]],
    
    description: ['', [ Validators.required, Validators.minLength(5)]]
    
    });


  constructor(  private fb: FormBuilder ) {}


    ngOnInit(): void {

      this.tasks = this.taskService.getTasks();
  }



  editTask( task : Task ): void {
    this.taskToEdit = task;
    this.editTaskForm.patchValue(task);
  }

  saveEdit(task: Task): void {
    
      this.taskService.editTask( task );
      this.cancelEdit();
  }

  cancelEdit(): void {
    this.taskToEdit = null;
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }

  toggleCompletion(task: Task): void {
    this.taskService.toggleCompletion(task);
  }



//Validaciones para el formulario de edicion de tarea

onSubmit( task: Task ): void {

  if( this.editTaskForm.invalid ){
    this.editTaskForm.markAllAsTouched();
    return;
  }

  this.saveEdit( task );

}


  isValidField( field: string ): boolean | null {
    return this.editTaskForm.controls[field].errors
            && this.editTaskForm.controls[field].touched;
  }


  getFieldError( field: string ): string | null {

    if( !this.editTaskForm.controls[field] ) return null;

    const errors = this.editTaskForm.controls[field].errors || {};

    for( const key of Object.keys(errors) ){
      switch( key ) {
        case 'required':
          return 'This field is required';
        
        case 'minlength':
          return `Minimun ${ errors['minlength'].requiredLength } characters.`;
      }
    }

    return null;
  }


}
