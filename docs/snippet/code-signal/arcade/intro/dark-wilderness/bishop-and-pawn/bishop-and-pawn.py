def bishop_and_pawn(bishop, pawn):
    return (
        bishop[0] != pawn[0]
        and
        bishop[1] != pawn[1]
        and
        (
            (ord(bishop[0]) + int(bishop[1])) % 2
            ==
            (ord(pawn[0]) + int(pawn[1])) % 2
        )
    )


print(bishop_and_pawn('a1', 'b1'))
print(bishop_and_pawn('a1', 'c3'))
print(bishop_and_pawn('g1', 'f3'))
print(bishop_and_pawn('h1', 'h3'))
