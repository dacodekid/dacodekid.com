def knapsack_light(value_1, weight_1, value_2, weight_2, max_weight):
    # can you carry both?
    if weight_1 + weight_2 <= max_weight:
        return value_1 + value_2

    # nope... only one; if you can carry either, then choose the costliest
    if weight_1 <= max_weight and weight_2 <= max_weight:
        return max(value_1, value_2)

    # one of them is heavy for you; so pick the one you can
    if weight_1 <= max_weight:
        return value_1
    elif weight_2 <= max_weight:
        return value_2

    # you are too weak to carry either; do some push-ups
    return 0


print(knapsack_light(5, 3, 7, 4, 6))
print(knapsack_light(15, 2, 20, 3, 2))
print(knapsack_light(10, 5, 6, 4, 8))
print(knapsack_light(10, 5, 6, 4, 9))
