{
  // Encapsulation in OOP
  {
    // Access modifiers
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;

      constructor(id: number, name: string, _balance: number) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
      }

      public addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }

      private get_Balance() {
        return this._balance;
      }

      getHiddenMethod() {
        return this.get_Balance();
      }
    }

    class StudentAccount extends BankAccount {
      test() {
        this.getHiddenMethod();
      }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
    goribManusherAccount.addDeposit(234);
    const my_Balance = goribManusherAccount.getHiddenMethod();
    console.log(my_Balance);

    //
  }

  //
}
