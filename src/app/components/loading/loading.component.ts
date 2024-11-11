import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css',
})
export class LoadingComponent {
  @Input() row: number = 5;
  @Input() column: number = 5;

  getColumnsArray() {
    return new Array(this.column);
  }

  getRowsArray() {
    return new Array(this.row);
  }
}
