import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonVerticalNavbarComponent } from '../button-vertical-navbar/button-vertical-navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-dropdown-vertical-navbar',
  standalone: true,
  imports: [CommonModule, ButtonVerticalNavbarComponent],
  templateUrl: './button-dropdown-vertical-navbar.component.html',
  styleUrls: ['./button-dropdown-vertical-navbar.component.css'],
})
export class ButtonDropdownVerticalNavbarComponent {
  @Input()
  public btn!: any;
  @Input()
  public index!: number;
  @Output()
  public click: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public clickDown: EventEmitter<void> = new EventEmitter<void>();

  isDropdownVisible = false;

  public clicked() {
    const index = this.findActive(this.buttons);
    if (index !== -1) {
      this.buttons[index].active = false;
    }
    this.toggleDropdown();
    this.click.emit();
    this.navigateTo(this.btn!.route!);
  }

  public toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  //Manejo de los botones abatidos
  @Input()
  public buttons!: any[];

  constructor(private router: Router) {}

  public clickedDown(index: number) {
    const indexActive = this.buttons.findIndex((elem) => {
      return elem.active == true;
    });
    if (indexActive !== -1) {
      this.buttons[indexActive].active = false;
    }
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
