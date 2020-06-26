import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DefaultApiComponent } from "./components/default-api/default-api.component";
import { SecondApiComponent } from "./components/second-api/second-api.component";
import { DefaultApiService } from "./services/default-api.service";
import { SecondApiService } from "./services/second-api.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        DefaultApiComponent,
        SecondApiComponent
      ],
      providers: [
        DefaultApiService,
        SecondApiService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;

    const firstHeading = compiled.querySelector('h1');
    console.log(firstHeading);

    expect(compiled.querySelector('h1').textContent).toContain(
      'Default API Component:'
    );
  });
});
