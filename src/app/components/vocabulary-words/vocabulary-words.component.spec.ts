import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyWordsComponent } from './vocabulary-words.component';

describe('VocabularyWordsComponent', () => {
  let component: VocabularyWordsComponent;
  let fixture: ComponentFixture<VocabularyWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
