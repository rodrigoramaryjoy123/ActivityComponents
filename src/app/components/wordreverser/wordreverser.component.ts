import { Component } from '@angular/core';

@Component({
  selector: 'app-wordreverser',
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})
export class WordreverserComponent {
  word: string = '';
  reversedWord: string = '';

  // Method to reverse the word
  reverseWord() {
    this.reversedWord = this.word.split('').reverse().join('');
  }

}
