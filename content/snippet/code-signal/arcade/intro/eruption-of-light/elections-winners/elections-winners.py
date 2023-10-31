def elections_winners(votes, k):
    max_vote = max(votes)

    if k == 0 and votes.count(max_vote) == 1:
        return 1

    return len([vote for vote in votes if vote + k > max_vote])


print(elections_winners([1, 1, 1, 1, 1], 1))
