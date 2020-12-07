import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "todo",
    loadChildren: () =>import('./todos/todos.module').then(m => m.TodosModule)
  },

  {
    path: "**",
    redirectTo: "todo"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
