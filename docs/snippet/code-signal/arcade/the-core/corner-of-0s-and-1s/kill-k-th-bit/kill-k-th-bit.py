def kill_kth_bit(n, k):
    return n & ~(1 << (k - 1))


print(kill_kth_bit(37, 3))
