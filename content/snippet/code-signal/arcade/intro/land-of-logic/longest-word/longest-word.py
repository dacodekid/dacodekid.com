def longest_word(text):
    max_word, word = '', ''

    for char in text:
        if char.isalpha():
            word += char
        else:
            max_word = max(word, max_word, key=len)
            word = ''

    return max(word, max_word, key=len)


print(longest_word("abcd"))
