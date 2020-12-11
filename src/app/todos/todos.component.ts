import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Todo } from './shared/todo.model';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {


  constructor(private router: Router, private platform: Platform) { }

  ngOnInit() {
    this.platform.backButton.subscribeWithPriority(0,
      () => {
        alert("Done");
      },
    );
  }

  create() {
    this.router.navigate(['/create'])
  }
}
