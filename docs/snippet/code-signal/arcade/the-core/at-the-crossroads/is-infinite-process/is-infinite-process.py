def is_infinite_process(a, b):
    return (a > b or a % 2 != b % 2)


print(is_infinite_process(10, 10))
print(is_infinite_process(2, 3))  # TRUE
print(is_infinite_process(2, 6))
