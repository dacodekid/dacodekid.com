def all_longest_strings(input_array):
    longest = len(max(input_array, key=len))
    return [i for i in input_array if len(i) == longest]


print(all_longest_strings(["aba", "aa", "ad", "vcd", "aba"]))
