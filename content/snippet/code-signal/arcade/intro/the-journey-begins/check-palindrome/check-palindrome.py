# def check_palindrome(input_string):
#     return input_string == input_string[::-1]

def check_palindrome(input_string):
    start = 0
    middle = len(input_string) // 2
    end = len(input_string) - 1

    while start <= middle:
        if input_string[start] is not input_string[end]:
            return False
        start = start + 1
        end = end - 1

    return True


print(check_palindrome('saippuakivikauppias'))
