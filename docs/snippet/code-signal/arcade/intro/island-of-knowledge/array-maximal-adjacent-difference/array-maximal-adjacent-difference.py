def array_maximal_adjacent_difference(inputArray):
    md = 0
    for i in range(len(inputArray) - 1):
        md = max(md, abs(inputArray[i] - inputArray[i + 1]))
    return md


print(array_maximal_adjacent_difference([9, 2, 0, 5]))
