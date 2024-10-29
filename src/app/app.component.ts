import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-csr-api';

  ngOnInit() {
    timer(0, 1000).subscribe(console.log)
  }
}
