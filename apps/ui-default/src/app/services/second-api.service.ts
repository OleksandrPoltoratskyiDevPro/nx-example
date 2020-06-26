import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SecondApiService {
  constructor(private readonly httpClient: HttpClient) {
  }

  fetchData(): Observable<object> {
    return this.httpClient.get<object>('/api/second/data');
  }
}
