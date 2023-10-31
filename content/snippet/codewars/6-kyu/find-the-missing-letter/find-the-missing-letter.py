def find_the_missing_letter(chars):
    for i in range(len(chars)):
        if ord(chars[i]) + 1 != ord(chars[i + 1]):
            return chr(ord(chars[i]) + 1)
    return None


print(find_the_missing_letter(['a', 'b', 'c', 'd', 'f']))
