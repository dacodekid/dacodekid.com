def delete_digit(n):
    s = str(n)
    max_n = 0

    for i in range(len(s)):
        tmp = int(s[0:i] + s[i+1:])
        if tmp > max_n:
            max_n = tmp

    return max_n


print(delete_digit(1001))
