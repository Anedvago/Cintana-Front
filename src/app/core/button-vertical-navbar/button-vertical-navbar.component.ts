import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-vertical-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-vertical-navbar.component.html',
  styleUrls: ['./button-vertical-navbar.component.css'],
})
export class ButtonVerticalNavbarComponent {
  @Input()
  public btn!: any;
  @Input()
  public index!: number;
  @Output()
  public click: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  public clicked() {
    this.click.emit();
    this.navigateTo(this.btn!.route!);
  }

  public navigateTo(route: string) {
    this.router.navigate([`/admin/${route}`]);
  }
}
