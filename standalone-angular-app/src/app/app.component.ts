import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() rating: number;
  // @ts-ignore
  @Input() flag: boolean;
}
