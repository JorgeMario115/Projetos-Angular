import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav'
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../views/home/home.component';


// @component é um decorator , com ele tenho a possibilidade de criar a classe do componente e exportalo
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatSidenav,
    MatListModule,
    MatSidenavModule,
    HomeComponent

  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
