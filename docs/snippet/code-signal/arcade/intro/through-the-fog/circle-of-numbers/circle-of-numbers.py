def circle_of_numbers(n, first_number):
    return (first_number + n // 2) % n


print(circle_of_numbers(10, 2))
