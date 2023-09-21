import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalNavbarComponent } from '../vertical-navbar/vertical-navbar.component';

@Component({
  selector: 'app-desktop-layout',
  standalone: true,
  imports: [CommonModule, VerticalNavbarComponent],
  templateUrl: './desktop-layout.component.html',
  styleUrls: ['./desktop-layout.component.css'],
})
export class DesktopLayoutComponent {}
