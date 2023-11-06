{
  // Getten and Setter
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

      set deposite(amount:number) {
        this._balance = this._balance + amount;
      }

      //   public addDeposit(amount: number) {
      //     this._balance = this._balance + amount;
      //   }

      //getter
      get balance() {
        return this._balance;
      }

      //   public get_Balance() {
      //     return this._balance;
      //   }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
    // goribManusherAccount.addDeposit(234); // function call korte hosse
    // const my_Balance = goribManusherAccount.get_Balance(); // function call korte hosse
        // console.log(my_Balance);
        goribManusherAccount.deposite = 50

    const myBalance = goribManusherAccount.balance; // property ae moto kore
    console.log(myBalance);

    //
  }

  //
}
