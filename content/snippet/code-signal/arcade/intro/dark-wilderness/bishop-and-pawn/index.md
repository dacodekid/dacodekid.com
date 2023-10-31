---
title: Bishop and Pawn
---

# Bishop and Pawn

Given the positions of a white `bishop` and a black `pawn` on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

| ![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1624426127191)
| :-:
| **image credit** : CodeSignal

## Example

- For `bishop = "a1"` and `pawn = "c3"`, the output should be

  ```:no-line-numbers
  bishop_and_pawn(bishop, pawn) = true
  ```

  | ![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/ex1.jpg?_tm=1624426127437) |
  | :----------------------------------------------------------------------------------------: |
  |                               **image credit** : CodeSignal                                |

- For `bishop = "h1"` and `pawn = "h3"`, the output should be

  ```:no-line-numbers
  bishop_and_pawn(bishop, pawn) = false
  ```

  | ![](https://codesignal.s3.amazonaws.com/tasks/bishopAndPawn/img/ex2.jpg?_tm=1624426127674) |
  | :----------------------------------------------------------------------------------------: |
  |                               **image credit** : CodeSignal                                |

## Input/Output

- **\[input\] string bishop**

  Coordinates of the white bishop in the chess notation.

  _Guaranteed constraints:_
  `bishop.length = 2`,
  `'a' ≤ bishop[0] ≤ 'h'`,
  `1 ≤ bishop[1] ≤ 8`.

- **\[input\] string pawn**

  Coordinates of the black pawn in the same notation.

  _Guaranteed constraints:_
  `pawn.length = 2`,
  `'a' ≤ pawn[0] ≤ 'h'`,
  `1 ≤ pawn[1] ≤ 8`.

## Solution

::: code-group
<<< ./bishop-and-pawn.py [PYTHON]
<<< ./bishop-and-pawn.js [JAVASCRIPT]
:::
