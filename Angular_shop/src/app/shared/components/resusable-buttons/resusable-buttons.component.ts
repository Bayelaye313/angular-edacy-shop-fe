import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-resuable-button',
  templateUrl: './resusable-buttons.component.html',
  styleUrl: './resusable-buttons.component.css',
})
export class ResuableButtonsComponent {
  @Input() isPrincipal!: boolean;
  @Input() isSecondary!: boolean;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  clicked() {
    this.buttonClicked.emit();
  }
}