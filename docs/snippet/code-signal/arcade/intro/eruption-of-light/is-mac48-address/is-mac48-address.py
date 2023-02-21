import string


def is_mac48_address(input_string):
    input_string = input_string.split('-')

    if len(input_string) != 6:
        return False

    for i in input_string:
        if len(i) != 2 or (not all(c in string.hexdigits for c in i)):
            return False

    return True


print(is_mac48_address('00-1B-63-84-45-E6'))
print(is_mac48_address('ZZ-1B-63-84-45-Z6'))
print(is_mac48_address('not a mac-address'))
