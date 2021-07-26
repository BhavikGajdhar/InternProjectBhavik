import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCdkComponent } from './example-cdk.component';

describe('ExampleCdkComponent', () => {
  let component: ExampleCdkComponent;
  let fixture: ComponentFixture<ExampleCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
