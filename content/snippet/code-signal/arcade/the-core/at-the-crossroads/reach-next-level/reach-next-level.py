def reach_next_level(experience, threshold, reward):
    return (experience + reward) >= threshold


print(reach_next_level(10, 15, 4))
