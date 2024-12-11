import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {NavComponent} from './nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'testapp';
}
