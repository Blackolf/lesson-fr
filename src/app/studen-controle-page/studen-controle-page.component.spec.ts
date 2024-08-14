import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenControlePageComponent } from './studen-controle-page.component';

describe('StudenControlePageComponent', () => {
  let component: StudenControlePageComponent;
  let fixture: ComponentFixture<StudenControlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudenControlePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudenControlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
