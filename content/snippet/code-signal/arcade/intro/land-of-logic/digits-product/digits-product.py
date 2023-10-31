def digits_product(product):
    # #smallest possible number for product 400 is 3558
    for i in range(1, 3559):
        smallest = 1
        for char in str(i):
            smallest *= int(char)
        if(smallest == product):
            return i
    return -1


print(digits_product(600))
