import { Component, signal } from '@angular/core';
import { Todo } from './todo/todo';
import { Country } from './country/country';

@Component({
  selector: 'app-root',
  imports: [ Todo, Country],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP3');
}
