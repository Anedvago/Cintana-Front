import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vertical-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css'],
})
export class VerticalNavbarComponent {
  public buttons = [
    { name: 'inicio', active: 'true', route: 'dashboard' },
    { name: 'inventario', active: 'false', route: 'inventory' },
    { name: 'reservaciones', active: 'false', route: 'reservations' },
    { name: 'punto de venta', active: 'false', route: 'sales' },
  ];
  constructor(private router: Router) {}
  public click(index: number) {
    const indexActive = this.buttons.findIndex((elem) => {
      return elem.active == 'true';
    });
    this.buttons[indexActive].active = 'false';
    this.buttons[index].active = 'true';
    this.navigateTo(this.buttons[index]!.route!);
  }

  public navigateTo(route: string) {
    this.router.navigate([`/admin/${route}`]);
  }
}
