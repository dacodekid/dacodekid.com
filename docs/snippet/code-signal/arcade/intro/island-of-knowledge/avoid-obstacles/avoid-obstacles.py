def avoid_obstacles(inputArray):
    inputArray.sort()
    jump = 0
    for i in range(2, max(inputArray) + 2):
        found = False
        for j in inputArray:
            if j % i == 0:
                found = True
                break
        if not found:
            jump = i
            break
    return jump


print(avoid_obstacles([1000, 999]))
