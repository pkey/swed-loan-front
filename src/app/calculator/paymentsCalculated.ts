import {Payment} from "./payment";

export class PaymentsCalculated {

  loanSum: number;
  loanTime: number;

  private _loanArray: Payment[] = [];

  constructor(loanSum:number,loanTime:number) {
    this.loanSum = loanSum;
    this.loanTime = loanTime;
    this._loanArray = this.calculateLoanDetails();
  }

  calculateLoanDetails(): Array<Payment>{
    return this.loanInformation(this.loanSum, this.loanTime);
  }

  loanInformation(loanSum: number, loanTime: number): Array<Payment> {

    let paymentList: Payment[] = [];

    let leftSum: number = loanSum;
    let monthlyInterestRate: number = 0.16 / 12;

    let monthlySum: number = ((loanSum * monthlyInterestRate) /
      (1 - Math.pow((1 + monthlyInterestRate), (-1 * loanTime)))) + 0.7;

    for (let currentMonth: number = 0; currentMonth < loanTime; currentMonth++) {
      paymentList.push(this.calculatePayment(currentMonth, leftSum, monthlySum, monthlyInterestRate));
      leftSum = leftSum - (monthlySum - (leftSum * monthlyInterestRate));
    }
    return paymentList;
  }

  private calculatePayment(currentMonth: number, leftSum: number,
                           monthlySum: number, monthlyInterestRate: number): Payment {

    return new Payment(currentMonth,
      leftSum.toFixed(2), monthlySum.toFixed(2), (leftSum * monthlyInterestRate).toFixed(2));
  }

  get loanArray(): Payment[] {
    return this._loanArray;
  }

  set loanArray(value: Payment[]) {
    this._loanArray = value;
  }
}