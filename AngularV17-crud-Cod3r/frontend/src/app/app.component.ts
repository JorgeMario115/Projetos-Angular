import { Component } from '@angular/core';
import { RouterLink , RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
              RouterLink,
              RouterOutlet,
              HeaderComponent,
              FooterComponent,
              NavComponent
            ],
  templateUrl:'app.component.html'
})
export class AppComponent {
  title = 'Mario';
}
