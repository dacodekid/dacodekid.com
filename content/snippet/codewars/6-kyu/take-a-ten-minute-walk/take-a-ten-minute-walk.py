def take_a_ten_minute_walk(walk):
    return len(walk) == 10 and walk.count('n') == walk.count('s') and walk.count('e') == walk.count('w')


print(take_a_ten_minute_walk(
    ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])
)
