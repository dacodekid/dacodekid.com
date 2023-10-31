def longest_digits_prefix(input_string):
    prefix = ''
    for s in input_string:
        if s.isdigit():
            prefix += s
        else:
            break
    return prefix


print(longest_digits_prefix('123aa1'))
