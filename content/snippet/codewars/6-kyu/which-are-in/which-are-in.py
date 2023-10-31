def which_are_in(array1, array2):
    array3 = []
    for i in array1:
        for j in array2:
            if j.find(i) != -1:
                array3.append(i)
                break
    return sorted(list(set(array3)))


print(
    which_are_in(
        ["arp", "live", "strong"],
        ["lively", "alive", "harp", "sharp", "armstrong"]
    )
)
