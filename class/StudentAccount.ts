import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
    
    deposit = (value: number): void => {
        if(this.validateStatus()){
          this.balance = this.balance + value + 10
          console.log('Você efetuou um deposito')
        }
      }

  }