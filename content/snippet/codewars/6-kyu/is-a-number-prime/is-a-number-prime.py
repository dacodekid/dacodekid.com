def is_a_number_prime(num):
    if num <= 1 or (num % 2 == 0 and num > 2):
        return False
    elif num == 2:
        return True
    else:
        for i in range(3, int(num**0.5) + 1, 2):
            if num % i == 0:
                return False
        return True


print(is_a_number_prime(4))
