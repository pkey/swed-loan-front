import {Component, OnInit, Output} from "@angular/core";
import {Payment} from "./payment";
import {PaymentsCalculated} from "./paymentsCalculated";

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  loanSum: number;
  loanTime: number;

  loanArray: Payment[] = [];

  constructor() {
    setTimeout(() => this.loanSum = 500);
    setTimeout(() => this.loanTime = 1);
  }

  ngOnInit() {
  }

  calculatePayments(): void {
    this.loanArray = new PaymentsCalculated(this.loanSum, this.loanTime).loanArray;
    console.log(this.loanArray);
  }

}