import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input()
  public type!: string;
  @Input()
  public label!: string;
  @Input()
  public labelAlign!: string;
  @Input()
  public placeholder!: string;
}
