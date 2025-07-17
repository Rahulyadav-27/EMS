import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreadcumbComponent } from "./shared/breadcumb/breadcumb.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BreadcumbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'employee-management-ui';
}
