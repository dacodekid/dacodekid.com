def chess_board_cell_color(cell1, cell2):
    c1 = (ord(cell1[0]) - 64 + int(cell1[1])) % 2 == 0
    c2 = (ord(cell2[0]) - 64 + int(cell2[1])) % 2 == 0

    return c1 == c2


print(chess_board_cell_color('A1', 'G1'))
