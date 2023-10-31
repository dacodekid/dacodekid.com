def circle_of_numbers(n, firstNumber):
    neighbour = int(firstNumber + (n/2))

    if neighbour > n:
        neighbour = int(firstNumber - (n/2))
    elif neighbour == n:
        neighbour = 0

    return neighbour


print(circle_of_numbers(6, 3))
