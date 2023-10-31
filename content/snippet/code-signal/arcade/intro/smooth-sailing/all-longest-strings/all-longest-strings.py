def all_longest_strings(input_array):
    # solution 1
    # longest = len(max(input_array, key=len))
    # return [i for i in input_array if len(i) == longest]

    # solution 2
    # return [i for i in input_array if len(i) == len(max(input_array, key=len))]

    # solution 3
    longest = 0
    longest_array = []

    # find the longest string
    for i in input_array:
        if len(i) > longest:
            longest = len(i)

    # find all strings that are the longest
    for i in input_array:
        if len(i) == longest:
            longest_array.append(i)

    return longest_array


print(all_longest_strings(["aba", "aa", "ad", "vcd", "aba"]))
