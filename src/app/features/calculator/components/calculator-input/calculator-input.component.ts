import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss'],
})
export class CalculatorInputComponent implements OnInit {
  @Input() result: number = 0;
  @Output() calculate: EventEmitter<string> = new EventEmitter();
  value: string = '';

  valueNotChanged = false;

  constructor() {
  }

  ngOnInit(): void { }

  onInput(){
    this.valueNotChanged = false;
  }

  onCalculateClicked(){
    this.calculate.emit(this.value);
    this.valueNotChanged = true;
  }

}
