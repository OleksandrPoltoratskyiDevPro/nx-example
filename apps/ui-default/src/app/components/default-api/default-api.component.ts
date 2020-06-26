import { Component, OnInit } from "@angular/core";
import { Todo } from "@wp-default/data";
import { Observable, of } from "rxjs";
import { DefaultApiService } from "../../services/default-api.service";

@Component({
  selector: 'wp-default-api',
  templateUrl: './default-api.component.html',
  styleUrls: ['./default-api.component.scss'],
})
export class DefaultApiComponent implements OnInit {
  todos: Observable<Todo[]> = of([]);

  constructor(private readonly defaultApiService: DefaultApiService) {
  }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.todos = this.defaultApiService.fetchTodos();

    // this.http.get<object>('/api/second/data').subscribe((r) => (this.secondApiGreeting = r));
  }

  addTodo() {
    // todo
  }
}
