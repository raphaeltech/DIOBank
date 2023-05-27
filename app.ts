import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.getLoan(200)
console.log(companyAccount)
const studentAccount: StudentAccount = new StudentAccount('Raphael', 10)
studentAccount.deposit(100)
console.log(studentAccount)