def narcissistic_number(value):
    return value == sum(int(digit) ** len(str(value)) for digit in str(value))


print(narcissistic_number(4887))
