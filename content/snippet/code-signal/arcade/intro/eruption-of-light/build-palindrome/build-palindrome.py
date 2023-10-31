def build_palindrome(st):
    new_str = st
    r_str = ''

    if st == st[::-1]:
        return st

    for c in st:
        r_str = c + r_str
        new_str = st + r_str
        if new_str == new_str[::-1]:
            return new_str

    return new_str


print(build_palindrome('abba'))
