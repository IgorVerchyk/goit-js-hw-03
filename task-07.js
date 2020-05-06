const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transactionBody = {
      amount,
      type,
      id: this.transactions.length + 1,
    };
    return transactionBody;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Not enough funds in you balanse");
    } else {
      this.balance -= amount;
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW)
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.log(`You balanse is ${this.balance} `);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transactionId of this.transactions)
      if ((transactionId.id = id)) {
        return console.log(transactionId);
      }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionsCount = 0;
    for (const transactionType of this.transactions)
      if (transactionType.type === type) {
        transactionsCount += transactionType.amount;
      }
    return console.log(transactionsCount);
  },
};

account.deposit(1000, "deposit");
account.getBalance();
account.withdraw(2000, "withdraw");
account.getBalance();
account.deposit(2000, "deposit");
account.getBalance();
account.withdraw(500, "withdraw");
account.getBalance();
account.getTransactionDetails(3);
account.getTransactionTotal("deposit");
account.getTransactionTotal("withdraw");
console.log(account);
