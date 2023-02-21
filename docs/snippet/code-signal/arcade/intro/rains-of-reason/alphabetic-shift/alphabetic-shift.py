def alphabetic_shift(input_string):
    return ''.join(chr(ord(c) + 1) if c != 'z' else 'a' for c in input_string)


print(alphabetic_shift('z'))
