import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from "./component2/component2.component";
import { Component3Component } from "./component3/component3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Component1Component, Component2Component, Component3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
}
