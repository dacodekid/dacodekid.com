def array_packing(a):
    return int(
        ''.join(
            [
                format(i, 'b').zfill(8)
                for i in reversed(a)
            ]
        ), 2)


print(array_packing([24, 85, 0]))
