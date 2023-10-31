def growing_plant(up_speed, down_speed, desired_height):
    height = 0
    day = 0
    while height < desired_height:
        day += 1
        height += up_speed
        if height >= desired_height:
            break
        height -= down_speed
    return day


print(growing_plant(6, 5, 10))
