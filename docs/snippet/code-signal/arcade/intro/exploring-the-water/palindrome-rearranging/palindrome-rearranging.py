def palindrome_rearranging(inputString):
    new_string = []

    for c in inputString:
        if c in new_string:
            new_string.pop(new_string.index(c))
        else:
            new_string.append(c)

    return len(new_string) <= 1


print(palindrome_rearranging("aabbcc"))
