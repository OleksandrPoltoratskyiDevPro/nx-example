import { Component, OnInit } from "@angular/core";
import { SecondApiService } from "../../services/second-api.service";
import { Observable } from "rxjs";

@Component({
  selector: 'wp-second-api',
  templateUrl: './second-api.component.html',
  styleUrls: ['./second-api.component.scss'],
})
export class SecondApiComponent implements OnInit {
  public data: Observable<object>;

  constructor(private readonly secondApiService: SecondApiService) {
  }

  ngOnInit(): void {
    this.data = this.secondApiService.fetchData();
  }
}
