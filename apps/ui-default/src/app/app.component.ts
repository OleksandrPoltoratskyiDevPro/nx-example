import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Todo } from '@wp-default/data';

@Component({
  selector: 'wp-default-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Array<Todo> = [{title: 'Todo 1'}, {title: 'Todo 2'}];
  secondApiGreeting: object;

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/default/todos').subscribe((t) => (this.todos = t));

    this.http.get<object>('/api/second/data').subscribe((r) => (this.secondApiGreeting = r));
  }

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
