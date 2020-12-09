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
export class TodolistComponent implements OnInit {

  public todolist: Todo[];
  public error: boolean;
  public disabled: boolean;
  public index: number;

  constructor(private service: TodoServiceService) { }

  ngOnInit (){  
    this.retry();
    this.error = false;
   }

  retry(): void {
    
    this.service.get().subscribe(
      (todoList: Todo[]) => {        
        this.error = false;
        this.todolist = todoList;
      },
      () => {
        this.error = true;
      }
    );
  }

  delete(todo: Todo, index: number) {
    this.index = index;
    this.disabled = true;
     this.service.delete(todo).subscribe(
      () => {
        this.index = null;
        this.disabled= false;
      },
      () => {}
    )
  }
}





