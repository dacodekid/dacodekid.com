def array_change(inputArray):
    count = 0
    for i in range(1, len(inputArray)):
        if inputArray[i] <= inputArray[i - 1]:
            count += inputArray[i - 1] - inputArray[i] + 1
            inputArray[i] = inputArray[i - 1] + 1

    return count


print(array_change([-1000, 0, -2, 0]))
