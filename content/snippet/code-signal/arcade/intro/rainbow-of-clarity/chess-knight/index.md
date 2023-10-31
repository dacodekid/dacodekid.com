---
title: Chess Knight
---

# Chess Knight

Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

| ![](https://codesignal.s3.amazonaws.com/tasks/chessKnight/img/knight.jpg?_tm=1624642282452)
| :-:
| **Image Credit** : Code Signal

## Example

- For `cell = "a1"`, the output should be

  ```:no-line-numbers
  chess_knight(cell) = 2
  ```

  | ![](https://codesignal.s3.amazonaws.com/tasks/chessKnight/img/ex_1.jpg?_tm=1624642282672)
  | :-:
  | **Image Credit** : Code Signal

- For `cell = "c2"`, the output should be

  ```:no-line-numbers
  chess_knight(cell) = 6
  ```

  | ![](https://codesignal.s3.amazonaws.com/tasks/chessKnight/img/ex_2.jpg?_tm=1624642282948)
  | :-:
  | **Image Credit** : Code Signal

Input/Output

- **\[execution time limit\] 4 seconds (py3)**

- **\[input\] string cell**

  String consisting of 2 letters - coordinates of the knight on an `8 × 8` chessboard in

## Solution

::: code-group
<<< ./chess-knight.py [PYTHON]
<<< ./chess-knight.js [JAVASCRIPT]
:::
