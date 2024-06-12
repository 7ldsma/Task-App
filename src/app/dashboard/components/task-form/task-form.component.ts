import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../interfaces/task';
import { title } from 'process';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {

  private taskService = inject(TaskService)

  constructor( private fb: FormBuilder ){}

  
  public myTask: FormGroup = this.fb.group({
    
    title: ['', [ Validators.required, Validators.minLength(3) ]],
    
    description: ['', [ Validators.required, Validators.minLength(5)]]
    
    });


       
    
    addTask(): void {

    const newTaskTitle = this.myTask.value.title;
    const newTaskDescription = this.myTask.value.description;


    if (newTaskTitle && newTaskDescription) {
      console.log(newTaskTitle)
      const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        description: newTaskDescription,
        completed: false
      };

      this.taskService.addTask( newTask );

      this.myTask.reset();
      this.myTask.markAsPristine();
      this.myTask.markAsUntouched();

    }
  }


    onSubmit(): void {

      if( this.myTask.invalid ){
        this.myTask.markAllAsTouched();
        return;
      }

      this.addTask();
  
    }
  
  
  
    isValidField( field: string ): boolean | null {
      return this.myTask.controls[field].errors
              && this.myTask.controls[field].touched;
    }
  
  
  
  
    getFieldError( field: string ): string | null {
  
      if( !this.myTask.controls[field] ) return null;
  
      const errors = this.myTask.controls[field].errors || {};
  
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
