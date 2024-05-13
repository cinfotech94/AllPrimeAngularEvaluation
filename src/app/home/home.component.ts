import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {
  title = 'Welcome to Mr. Afeez All Prime Technologies Angular Evaluation!';
  constructor() { }
}
