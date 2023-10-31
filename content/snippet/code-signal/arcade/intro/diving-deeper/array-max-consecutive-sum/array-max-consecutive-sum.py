def array_max_consecutive_sum(input_list, k):
    max_sum = current_sum = sum(input_list[:k])

    for i in range(len(input_list) - k):
        current_sum += input_list[i + k] - input_list[i]
        max_sum = max(max_sum, current_sum)
    return max_sum


print(array_max_consecutive_sum([2, 3, 5, 1, 6], 2))
