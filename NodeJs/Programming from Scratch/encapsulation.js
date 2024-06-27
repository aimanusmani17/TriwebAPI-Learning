class BankAccount{
    constructor(accNumber,accHolderName,balance){
        this.accNumber= accNumber;
        this.accHolderName=accHolderName;
        this.balance=balance;
    }

    showAccDetails(){
        console.log(`Account Number: ${this.accNumber}`);
        console.log(`Account Holder Name is: ${this.accHolderName}`);
        console.log(`Balance is: ${this.balance}`);

    }

    deposit(amount){
        this.balance += amount;
        // Number(this.balance) += Number(amount);
        this.showAccDetails();

    }

    withdraw(amount){
        if (this.balance >=amount){
            this.balance -= amount;
            this.showAccDetails();

        }
        else{
            console.log("Insufficient Balance");
        }
    }
}

     let myBankAcc= new BankAccount("3456", "Akshi", 5000);
     myBankAcc.deposit(1000);