def first_digit(input_string):
    for i in input_string:
        if i.isdigit():
            return i
    return 0


print(first_digit('Abc1d2'))
