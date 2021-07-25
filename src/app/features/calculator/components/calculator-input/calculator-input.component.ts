import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.scss'],
})
export class CalculatorInputComponent implements OnInit {
  @Input() result: number = 0;
  @Output() calculate: EventEmitter<string> = new EventEmitter();
  value: string = '';

  @ViewChild('calculationInput')
  private calculationInput!: ElementRef<HTMLInputElement>;
  @ViewChild('calculateButton')
  private calculateButton!: ElementRef<HTMLInputElement>;



  constructor() {
  }

  ngOnInit(): void {

  }

  onCalculateClicked(){
    this.calculate.emit(this.value);
  }

}
