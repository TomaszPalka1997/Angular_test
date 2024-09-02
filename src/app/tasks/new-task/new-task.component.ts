import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData, type Task } from 'src/app/tasks/task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
 @Output() cancel = new EventEmitter<void>();
 @Output() addedTask = new EventEmitter<NewTaskData>();
newTaskTitle = '';
newTaskSummary = '';
newTaskDueDate = '';

 onCancelAdding(){
  this.cancel.emit();
 }

 onAddingTask(){
  
this.addedTask.emit({
  title: this.newTaskTitle,
  summary: this.newTaskSummary,
  dueDate: this.newTaskDueDate
})
 }
}
