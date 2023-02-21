def box_blur(image):
    result = []
    for i in range(len(image) - 2):
        row = []
        for j in range(len(image[0]) - 2):
            row.append(
                ((sum(image[i][j:j+3])) +
                 (sum(image[i+1][j:j+3])) +
                 (sum(image[i+2][j:j+3]))
                 ) // 9
            )
        result.append(row)
    return result


print(box_blur([
    [36, 0, 18, 9],
    [27, 54, 9, 0],
    [81, 63, 72, 45]
]))
