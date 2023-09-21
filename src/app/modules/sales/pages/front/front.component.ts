import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopLayoutComponent } from 'src/app/core/desktop-layout/desktop-layout.component';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [CommonModule, DesktopLayoutComponent],
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
})
export class FrontComponent {}
