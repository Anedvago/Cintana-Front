import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBlueComponent } from 'src/app/core/button-blue/button-blue.component';
import { InputNotLabelComponent } from 'src/app/core/input-not-label/input-not-labelcomponent';

@Component({
  selector: 'app-form-documents',
  standalone: true,
  imports: [CommonModule, ButtonBlueComponent, InputNotLabelComponent],
  templateUrl: './form-documents.component.html',
  styleUrls: ['./form-documents.component.css'],
})
export class FormDocumentsComponent {}
