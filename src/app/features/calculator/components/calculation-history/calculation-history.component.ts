import { Component, Input, OnInit } from '@angular/core';
import { CalculationHistoryModel } from '../../models/caclculation-history.model';

@Component({
  selector: 'app-calculation-history',
  templateUrl: './calculation-history.component.html',
  styleUrls: ['./calculation-history.component.scss']
})
export class CalculationHistoryComponent implements OnInit {
  @Input() history: CalculationHistoryModel[] | null = [];

  constructor() { }

  ngOnInit(): void {

  }

  trackByFn(index: number, item: CalculationHistoryModel){
    return item.timestamp.getTime();
  }

}
