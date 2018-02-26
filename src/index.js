// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var money = currency
    var coins = {};
    var rich = {};
    rich.error = "You are rich, my friend! We don't have so much coins for exchange";
    if (money > 10000) return rich;
    if (money >= 50) coins.H = Math.floor(money/50);
    money = money % 50;
    if (money >= 25) coins.Q = Math.floor(money/25);
    money = money % 25;
    if (money >= 10) coins.D = Math.floor(money/10);
    money = money % 10;
    if (money >= 5) coins.N = Math.floor(money/5);
    money = money % 5;
    if (money >= 1) coins.P = money;
    return coins;
}
