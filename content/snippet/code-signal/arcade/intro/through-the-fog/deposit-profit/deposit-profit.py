def deposit_profit(deposit, rate, threshold):
    years = 0
    money = deposit
    while money < threshold:
        years += 1
        money += money * rate / 100
    return years


print(deposit_profit(100, 20, 170))
