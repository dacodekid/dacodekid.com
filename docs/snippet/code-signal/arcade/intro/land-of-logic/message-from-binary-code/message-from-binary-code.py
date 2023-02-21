def message_from_binary_code(code):
    return ''.join([chr(int(code[i:i+8], 2)) for i in range(0, len(code), 8)])


print(message_from_binary_code('010010000110010101101100011011000110111100100001'))
