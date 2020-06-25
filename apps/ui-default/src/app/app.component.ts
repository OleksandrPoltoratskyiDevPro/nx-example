import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {SomeSharedClass, Todo} from '@wp-default/data';

@Component({
  selector: 'wp-default-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Array<Todo> = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));

    const sharedClassInstance = new SomeSharedClass('I`m a frontend shared instance');
    console.log('shared class UI', sharedClassInstance);
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
