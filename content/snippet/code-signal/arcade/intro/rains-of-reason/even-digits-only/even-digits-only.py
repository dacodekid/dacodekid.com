def even_digits_only(n):
    return all(int(i) % 2 == 0 for i in str(n))


print(even_digits_only(248622))
