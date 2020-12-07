import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';
import {​​ HttpClientModule }​​ from '@angular/common/http';
import { TodosRoutingModule } from './todos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
    TodolistComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    IonicModule
  ],
  exports: [TodosComponent]
})
export class TodosModule { }
