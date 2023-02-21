def are_equally_strong(yourLeft, yourRight, friendsLeft, friendsRight):
    return (yourLeft == friendsLeft or yourLeft == friendsRight) and (yourRight == friendsLeft or yourRight == friendsRight)


print(are_equally_strong(10, 15, 15, 10))
