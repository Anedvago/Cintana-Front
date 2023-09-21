import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from 'src/app/core/desktop-layout/desktop-layout.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DesktopLayoutComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {}
