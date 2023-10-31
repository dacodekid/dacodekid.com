def metro_card(last_number_of_days):
    if last_number_of_days < 31:
        return [31]

    return [28, 30, 31]


print(metro_card(30))
print(metro_card(31))
print(metro_card(28))
