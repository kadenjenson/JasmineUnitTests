function SavingCalc(paycheck) {
  this.percent = 0.30;
  this.paycheck = paycheck;

  this.deposit = function() {
    return (this.percent * this.paycheck)
  }
}

const piggyBank = new SavingCalc(2000);
piggyBank.deposit();

// This code snippet represents an unfinished savings calculator. Your goal is to calculate 30 percent of this months paycheck, totaled at $2000. Pass the paycheck amount in the correct spot and instantiate the object in order to return the correct deposit amount.