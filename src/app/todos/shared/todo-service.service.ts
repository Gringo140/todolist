import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  public todoList: Todo[];
  

  constructor(private Http: HttpClient) { }

  get(): Observable<Todo[]> {
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.secretKey
      })
    };
    return this.Http.get<Todo[]>(environment.jsonbin.apiURL, options).pipe(
      tap(
        (todoList: Todo[]) => { this.todoList = todoList},
        () => {}
      )


    )
  }

  post(todo: Todo) {
    const todoList = [];

    this.todoList.forEach((element) => {
      todoList.push(element)
    });
    todoList.push(todo)

    return this.put(todoList).pipe(
      tap( () => {this.todoList.push(todo)},
      () => {},
    ));
  }

  put(todoList: Todo[]): Observable<Todo[]> {
    const options = {
      headers: new HttpHeaders({
        "secret-key": environment.jsonbin.secretKey,
        "Content-Type": "application/json",
        "versioning": "false"
      })
    };
    return this.Http.put<Todo[]>(environment.jsonbin.apiURL, todoList, options)
    
  }

  delete(todo: Todo): Observable<Todo[]>{
    const newTodoList = [];

    this.todoList.forEach(element => {
      if (element !== todo) {
        newTodoList.push(element)
      }
    });
    return this.put(newTodoList).pipe(
      tap(
        ()=>{
         const index = this.todoList.indexOf(todo);
         this.todoList.splice(index, 1);
        },
        ()=>{}
      )
    )
  }
}
