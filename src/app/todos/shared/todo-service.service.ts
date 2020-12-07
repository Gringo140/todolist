import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    return this.Http.get<Todo[]>(environment.jsonbin.apiURL, options)
  }

  post(todo: Todo) {
    const todoList = [];

    this.todoList.forEach((element) => {
      todoList.push(element)
    });
    todoList.push(todo)

    this.put(todoList).subscribe(
      () => this.todoList.push(todo),
      () => {},
    );
    return todo;
  }

  onDelete(todo: Todo) {

    this.put(this.todoList);
    return todo;
  };

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
}
