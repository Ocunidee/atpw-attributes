import { Component, signal } from '@angular/core'

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly logoUrl = signal('https://angular.io/assets/images/logos/angular/angular.png')
  protected readonly logoWidth = signal(50)
}
