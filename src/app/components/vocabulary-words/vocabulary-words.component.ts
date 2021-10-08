import { Component, OnInit } from '@angular/core';
import { VocabularyWord } from 'src/app/models/vocabulary-word';
import { VOCAB_WORDS } from 'src/app/mocks/vocab-words';

@Component({
  selector: 'app-vocabulary-words',
  templateUrl: './vocabulary-words.component.html',
  styleUrls: ['./vocabulary-words.component.scss']
})
export class VocabularyWordsComponent implements OnInit {
  vocabularyWords: VocabularyWord[] = VOCAB_WORDS

  constructor() { }

  ngOnInit(): void {
  }

}
