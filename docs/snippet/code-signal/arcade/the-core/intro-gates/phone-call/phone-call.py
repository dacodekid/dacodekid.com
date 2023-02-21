def phone_call(min1, min2_10, min11, s):
    mins = 0
    cost = 0

    while s > 0:
        mins += 1  # add one minute for each loop

        if mins == 1:  # 1st minute
            cost = min1
        elif mins == 2:  # 2nd to 10th minutes
            cost = min2_10
        elif mins >= 11:  # 11th minute onwards
            cost = min11

        s -= cost

        if s < 0:
            mins -= 1

    return mins


print(phone_call(10, 1, 2, 2))
