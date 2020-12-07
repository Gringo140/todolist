import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoServiceService } from '../shared/todo-service.service';
import { Todo } from '../shared/todo.model';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {

  public todolist: Todo[];
  public error: boolean;

  constructor(private service: TodoServiceService) {
    this.retry();

  }

  retry(): void {
    this.service.get().subscribe(
      (todoList: Todo[]) => {
        this.error = false;
        this.todolist = todoList;
        this.service.todoList = this.todolist;
      },
      () => {
        this.error = true;
      }
    );
  }

  

  delete(todo: Todo) {
    const newTodoList = [];

    this.todolist.forEach(element => {
      if (element !== todo) {
        newTodoList.push(element)
      }
    });

    this.service.put(newTodoList).subscribe(
      () => {
        const index = this.service.todoList.indexOf(todo);
        this.service.todoList.splice(index, 1);
      },
      () => {

      });
    return todo;
  }
}





