def move_north(row):
    return row + 2 <= 8


def move_south(row):
    return row - 2 >= 1


def move_east(col):
    return col + 2 <= 8


def move_west(col):
    return col - 2 >= 1


def move_left(squares):
    if squares - 1 >= 1:
        return 1
    return 0


def move_right(squares):
    if squares + 1 <= 8:
        return 1
    return 0


def chess_knight(cell):
    col = ord(cell[0]) - 96
    row = int(cell[1])

    moves = 0

    if move_north(row):
        moves += move_left(col) + move_right(col)

    if move_south(row):
        moves += move_left(col) + move_right(col)

    if move_east(col):
        moves += move_left(row) + move_right(row)

    if move_west(col):
        moves += move_left(row) + move_right(row)

    return moves


print(chess_knight('d5'))
