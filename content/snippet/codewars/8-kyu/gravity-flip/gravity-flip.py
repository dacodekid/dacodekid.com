def gravity_flip(direction, array):
    if direction == "R":
        return sorted(array)
    elif direction == "L":
        return sorted(array, reverse=True)


print(gravity_flip('L', [3, 2, 1, 2]))
