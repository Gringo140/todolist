import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoServiceService } from '../shared/todo-service.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  public formTodo: FormGroup;

  constructor(
    private router: Router,
    private service: TodoServiceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formTodo = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

  save() {
    if(this.formTodo.valid){
      this.router.navigate(['/todo']);
      return this.service.post({
        name: this.formTodo.get('name').value,
        description: this.formTodo.get('description').value
      });
    }

  }


}
