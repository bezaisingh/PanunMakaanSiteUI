import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() name: string;
  @Input() value: any;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    this.change.emit(event.target.value);
  }

}
