import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: string[] = [];

  addTask(task: string): void {
		const taskIsNotEmpty = (task.length > 0);
    if (taskIsNotEmpty) this.tasks.push(task);
  }
}