import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-props-mismatch-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() title: string;
  @Input() rating: number;
  @Input() flag: boolean;
}
