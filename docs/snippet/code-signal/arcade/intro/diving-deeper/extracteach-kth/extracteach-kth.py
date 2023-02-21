def extracteach_kth(input_list, k):
    return [input_list[i] for i in range(len(input_list)) if i % k != k - 1]


print(extracteach_kth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
