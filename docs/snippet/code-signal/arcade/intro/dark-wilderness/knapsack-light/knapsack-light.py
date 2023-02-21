def knapsack_light(value_1, weight_1, value_2, weight_2, max_weight):
    if weight_1 + weight_2 <= max_weight:
        return value_1 + value_2
    elif weight_1 <= max_weight and weight_2 <= max_weight:
        return max(value_1, value_2)
    elif weight_1 <= max_weight:
        return value_1
    elif weight_2 <= max_weight:
        return value_2
    else:
        return 0


print(knapsack_light(10, 5, 6, 4, 8))
