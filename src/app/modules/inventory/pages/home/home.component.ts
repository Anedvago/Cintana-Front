import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from 'src/app/core/desktop-layout/desktop-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DesktopLayoutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
