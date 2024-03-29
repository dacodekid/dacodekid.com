---
title: Battle of the characters (Easy)
---

# Battle of the characters (Easy)

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.

## Rules:

- Each character have its own power: `A = 1, B = 2, ... Y = 25, Z = 26`
- Only capital characters can and will participate a battle.
- Only two groups to a fight.
- Group whose total power (`A + B + C + ...`) is bigger wins.
- If the powers are equal, it's a tie.

## Example

```:no-line-numbers
battle_of_the_characters("ONE", "TWO"); // => "TWO"`
battle_of_the_characters("ONE", "NEO"); // => "Tie!"

battle_of_the_characters("ONE", "TWO"); // => "TWO"`
battle_of_the_characters("ONE", "NEO"); // => "Tie!"
```

## Solution

::: code-group
<<< ./battle-of-the-characters-easy.py [PYTHON]
:::
