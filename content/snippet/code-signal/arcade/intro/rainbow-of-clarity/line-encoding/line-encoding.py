import itertools


def line_encoding(s):

    result = ''
    for label, group in itertools.groupby(s):
        count = sum(1 for _ in group)
        if count > 1:
            result += '{}{}'.format(count, label)
        else:
            result += label

    return result


print(line_encoding('ccccccccccccccc'))
print(line_encoding('abbccc'))
