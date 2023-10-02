import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/core/card/card.component';
import { AccordionComponent } from 'src/app/core/accordion/accordion.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, CardComponent, AccordionComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  
}
