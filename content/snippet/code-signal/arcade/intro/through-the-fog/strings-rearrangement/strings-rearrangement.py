import itertools


def check_string(permutation):
    for i in range(len(permutation) - 1):
        if sum([a != b for a, b in zip(permutation[i], permutation[i + 1])]) != 1:
            return False
    return True


def strings_rearrangement(input_array):
    permutations = itertools.permutations(input_array)

    for permutation in permutations:
        if(check_string(permutation)):
            return True
    return False


print(strings_rearrangement(["aba", "bbb", "bab"]))
print(strings_rearrangement(["ab", "bb", "aa"]))
