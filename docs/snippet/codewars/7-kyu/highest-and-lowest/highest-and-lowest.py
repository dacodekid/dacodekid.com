def highest_and_lowest(numbers):
    numbers = list(map(int, numbers.split()))
    return str(max(numbers)) + ' ' + str(min(numbers))


print(highest_and_lowest("1 2 3 4 5"))  # return "5 1"
print(highest_and_lowest("1 2 -3 4 5"))  # return "5 -3"
print(highest_and_lowest("1 9 3 4 -5"))  # return "9 -5"
