var balance = 100;

document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;

function V1() {
    if (balance < 50) {
        document.getElementById("balance").innerHTML = "У вас недостаточно монеток, начните заново!";
    } else {
    var int_random = Math.floor(Math.random() * 4);
    if (int_random == 3) {
        balance -= 50;
        document.getElementById("balance").innerHTML = "Вы проиграли 50 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    } else {
        balance += 50;
        document.getElementById("balance").innerHTML = "Вы выиграли 50 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    }
  }
}

function V2() {
    if (balance < 200) {
        document.getElementById("balance").innerHTML = "У вас недостаточно монеток, начните заново!";
    } else {
    var int_random = Math.floor(Math.random() * 4);
    if (int_random == 3) {
        balance -= 200;
        document.getElementById("balance").innerHTML = "Вы проиграли 200 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    } else {
        balance += 200;
        document.getElementById("balance").innerHTML = "Вы выиграли 200 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    }
  }
}

function V3() {
    if (balance < 500) {
        document.getElementById("balance").innerHTML = "У вас недостаточно монеток, начните заново!";
    } else {
    if (Math.floor(Math.random() * 4) == 3) {
        balance -= 500;
        document.getElementById("balance").innerHTML = "Вы проиграли 500 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    } else {
        balance += 500;
        document.getElementById("balance").innerHTML = "Вы выиграли 500 монет, ваш баланс: " + balance;
        document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
    }
  }
}

function remove() {
  balance -= balance;
  balance += 100;
  document.getElementById("balance").innerHTML = "Готово! Ваш баланс: "+balance; 
  document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
}

function balance() {
  document.getElementById("balance").innerHTML = "Ваш баланс: "+balance; 
  document.getElementById("bal").innerHTML = "Ваш баланс: " + balance;
}