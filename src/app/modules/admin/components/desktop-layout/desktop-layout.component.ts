import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavbarComponent } from 'src/app/core/vertical-navbar/vertical-navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [CommonModule, VerticalNavbarComponent, RouterOutlet],
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.css'],
})
export class DesktopLayoutComponent {}
