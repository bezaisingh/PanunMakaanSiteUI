import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

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
