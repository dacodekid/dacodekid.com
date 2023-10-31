def late_ride(n):
    # convert minutes to hours
    hours = n // 60

    # convert minutes to minutes
    minutes = n % 60

    # join hours and minutes
    current_time = str(hours) + str(minutes)

    # convert to int and add each digit
    return sum(int(digit) for digit in current_time)


print(late_ride(808))
