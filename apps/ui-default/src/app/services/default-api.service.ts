import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "@wp-default/data";
import { Observable } from "rxjs";


@Injectable()
export class DefaultApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  fetchTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('/api/default/todos');
  }
}
