import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-deposit',
  templateUrl: './cash-deposit.component.html',
  styleUrls: ['./cash-deposit.component.scss']
})
export class CashDepositComponent implements OnInit {

  config: any = {
    atmConfig: [
      { type: 2000, totalNumber: 0, initialNumber: null },
      { type: 500, totalNumber: 0, initialNumber: null },
      { type: 200, totalNumber: 0, initialNumber: null },
      { type: 100, totalNumber: 0, initialNumber: null },
    ],
    totalAmmount: 0,
    withDrawAmmount: null,
    logs: []
  }

  depositCash() {
   
    this.config.logs.unshift({
      type: 'deposit',
      message: `Deposited:  2000: ${this.config.atmConfig[0].initialNumber!=null?this.config.atmConfig[0].initialNumber:0}, 500: ${this.config.atmConfig[1].initialNumber != null ? this.config.atmConfig[1].initialNumber : 0}, 200: ${this.config.atmConfig[2].initialNumber != null ? this.config.atmConfig[2].initialNumber : 0}. 100: ${this.config.atmConfig[3].initialNumber != null ? this.config.atmConfig[3].initialNumber : 0}`,
      time: new Date(),
    });

    for (let i = 0; i < this.config.atmConfig.length; i++) {
      this.config.atmConfig[i].totalNumber += this.config.atmConfig[i].initialNumber;
      this.config.totalAmmount = this.config.totalAmmount + this.config.atmConfig[i].type * this.config.atmConfig[i].initialNumber;
      this.config.atmConfig[i].initialNumber = 0;
    }

  }

  withdrawAmmount() {
   
    // check if the entered value is acceptable or not
    if (this.config.withDrawAmmount === 2000 || this.config.withDrawAmmount === 500 || this.config.withDrawAmmount === 200 || this.config.withDrawAmmount === 100) {
      // check if enter ammount is less than total deposite ammount
      if (this.config.withDrawAmmount <= this.config.totalAmmount) {

        let withdraw_2k = Math.floor(this.config.withDrawAmmount / 2000);
        let withdraw_500 = Math.floor((this.config.withDrawAmmount % 2000) / 500);
        let withdraw_200 = Math.floor(((this.config.withDrawAmmount % 2000) % 500) / 200);
        let withdraw_100 = Math.floor((((this.config.withDrawAmmount % 2000) % 500) % 200) / 100);
        if (
          withdraw_2k <= this.config.atmConfig[0].totalNumber &&
          withdraw_500 <= this.config.atmConfig[1].totalNumber &&
          withdraw_200 <= this.config.atmConfig[2].totalNumber &&
          withdraw_100 <= this.config.atmConfig[3].totalNumber
        ) {
          this.config.atmConfig[0].totalNumber -= withdraw_2k
          this.config.atmConfig[1].totalNumber -= withdraw_500
          this.config.atmConfig[2].totalNumber -= withdraw_200
          this.config.atmConfig[3].totalNumber -= withdraw_100
          this.config.totalAmmount = this.config.totalAmmount - this.config.withDrawAmmount

        }else{
          this.config.logs.unshift({
            type: 'failed',
            message: `Cannot Withdraw`,
            time: new Date(),
          });
        }
      } else {

        this.config.logs.unshift({
          type: 'failed',
          message: `Cannot Withdraw, Insufficiant fund`,
          time: new Date(),
        });

      }

    } else {
   
      this.config.logs.unshift({
        type: 'failed',
        message: `Cannot Withdraw `,
        time: new Date(),
      });

    }



    this.config.withDrawAmmount = null


  }



  onChangeValue(val: number, index: number) {
    if (val < 0) {
      this.config.atmConfig[index].initialNumber = 0

    }
  }

  constructor() { }



  ngOnInit(): void {
  }

}
