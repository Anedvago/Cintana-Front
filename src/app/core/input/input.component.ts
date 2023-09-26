import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [TitleCasePipe, FormsModule],
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

  @Output()
  public changeValue: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  public value?: any;
  public changeValueInput(): void {
    this.changeValue.emit(this.value);
  }
}
