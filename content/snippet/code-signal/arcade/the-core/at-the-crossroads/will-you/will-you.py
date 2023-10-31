def will_you(young, beautiful, loved):
    return (young and beautiful) != loved


print(will_you(False, False, False))
print(will_you(True, True, True))
print(will_you(True, False, True))
