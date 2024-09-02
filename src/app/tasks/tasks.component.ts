import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import {Tasks} from './dummytasks';
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  tasks = Tasks;

  get selectedUserTasks(){
    return this.tasks.filter((task)=> task.userId ===this.userId)
  }

  OnCompleteTask(id: string){
    this.tasks = this.tasks.filter((task)=> task.id !==id);
  }

  addNewTask(userId: string){
    this.isAddingTask = true;
  }

  onCancelAddingTask(){
    this.isAddingTask=false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.title,
      dueDate: taskData.dueDate
    })

    this.isAddingTask= false;
}}
