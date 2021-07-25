import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculationService {



  constructor() {
  }

  calculateString(text: string): number {
    let split = text.split(/([+\-])/);
    if(text.includes('*') || text.includes('/')){
      split = this.replaceMultiplyAndDivide(split);
    }
    return this.splitArrayToResult(split);
  }

  splitArrayToResult(split: string[]) {
    let result: number = +split[0];
    let currentOperator: string | null = null;
    for (let index in split) {
      if (index === '0') {
        continue;
      }
      const step = split[index];
      if (this.isOperator(step)) {
        currentOperator = step;
      }
      else if (!isNaN(+step) && !!currentOperator) {
        result = this.calculateBasedOnOperator(result, +step, currentOperator);
      }
    }
    return result;
  }

  replaceMultiplyAndDivide(splitArray: string[]): string[]{
    const newSplitArray = [...splitArray];
    for (const index in newSplitArray){
      const item = newSplitArray[index];
      if (item.includes('*') || item.includes('/')){
        newSplitArray[index] = this.calculateMultiplyAndDivide(item).toString();
      }
    }
    return newSplitArray;
  }

  calculateMultiplyAndDivide(text: string): number{
    const split = text.split(/([*\/])/);
    return this.splitArrayToResult(split);
  }

  calculateBasedOnOperator(current: number, next: number, operator: string): number{
    let result = +current;
    switch (operator){
      case '+':
        result += next;
        break;
      case '-':
        result -= next;
        break;
      case '*':
        result *= next;
        break;
      case '/':
        result /= next;
        break;
    }
    return result;
  }

  isOperator(char: string){
    return /([*\/\-+])/.test(char);
  }
}
