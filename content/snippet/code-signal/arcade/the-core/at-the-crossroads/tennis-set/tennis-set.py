def tennis_set(score1, score2):
    max_score = max(score1, score2)
    min_score = min(score1, score2)

    if max_score == 6 and min_score < 5:
        return True

    if max_score == 7 and (min_score in (5, 6)):
        return True

    return False


print(tennis_set(6, 3))
