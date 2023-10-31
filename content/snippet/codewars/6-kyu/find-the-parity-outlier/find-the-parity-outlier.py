def find_the_parity_outlier(integers):
    even = []
    odd = []
    for i in integers:
        if i % 2 == 0:
            even.append(i)
        else:
            odd.append(i)

        if len(even) > 0 and len(odd) > 0 and (len(even) != len(odd)):
            break

    return even[0] if len(even) == 1 else odd[0]


print(find_the_parity_outlier([2, 4, 0, 100, 4, 11, 2602, 36]))
