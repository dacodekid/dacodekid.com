def valid_time(time):
    hh, mm = [int(t) for t in time.split(':')]
    return 0 <= hh < 24 and 0 <= mm < 60


print(valid_time('24:59'))
