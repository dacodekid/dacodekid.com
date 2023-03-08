def closest_to_zero(nums):
    if len(nums) < 1:
        return 0

    smallest_num = nums[0]

    for current_num in nums:
        if current_num == 0:
            continue

        if abs(smallest_num) == abs(current_num):
            smallest_num = abs(current_num)
        elif smallest_num > current_num:
            smallest_num = current_num

    return smallest_num


print(closest_to_zero([6, -5, 0, 11, 12]))
