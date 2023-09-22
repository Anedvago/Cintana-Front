import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonVerticalNavbarComponent } from '../button-vertical-navbar/button-vertical-navbar.component';
import { ButtonDropdownVerticalNavbarComponent } from '../button-dropdown-vertical-navbar/button-dropdown-vertical-navbar.component';
@Component({
  selector: 'app-vertical-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ButtonVerticalNavbarComponent,
    ButtonDropdownVerticalNavbarComponent,
  ],
  templateUrl: './vertical-navbar.component.html',
  styleUrls: ['./vertical-navbar.component.css'],
})
export class VerticalNavbarComponent {
  public buttons = [
    { name: 'inicio', active: true, route: 'dashboard' },
    { name: 'inventario', active: false, route: 'inventory' },
    { name: 'reservaciones', active: false, route: 'reservations' },
    { name: 'punto de venta', active: false, route: 'sales' },
  ];

  public buttonsDropDownInventory = [
    { name: 'Articulos', active: false, route: 'inventory' },
    { name: 'Servicios', active: false, route: 'inventory' },
    { name: 'Compras', active: false, route: 'inventory' },
    { name: 'Bajas', active: false, route: 'inventory' },
  ];
  public buttonsDropDownReservations = [
    { name: 'Habitaciones', active: false, route: 'inventory' },
    { name: 'Checks', active: false, route: 'inventory' },
  ];

  constructor(private router: Router) {}

  public click(index: number) {
    const indexActive = this.findActive(this.buttons);
    this.buttons[indexActive].active = false;
    this.buttons[index].active = true;
    this.navigateTo(this.buttons[index]!.route!);
  }

  public navigateTo(route: string) {
    this.router.navigate([`/admin/${route}`]);
  }

  public findActive(list: any[]): number {
    const index = list.findIndex((elem) => {
      return elem.active == true;
    });
    return index;
  }
}
