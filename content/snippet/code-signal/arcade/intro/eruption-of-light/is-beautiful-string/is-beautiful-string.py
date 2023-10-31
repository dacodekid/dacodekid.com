import string


def is_beautiful_string(input_string):
    count_dict = sorted([
        (k, input_string.count(k))
        for k in set((input_string))
    ])

    if(count_dict[0][0] != 'a'):
        return False

    for i in range(len(count_dict) - 1):
        if(
            ord(count_dict[i+1][0]) - ord(count_dict[i][0]) != 1
            or
            count_dict[i+1][1] > count_dict[i][1]
        ):
            return False

    return True


print(is_beautiful_string('bcdeff'))
print(is_beautiful_string('aabb'))
