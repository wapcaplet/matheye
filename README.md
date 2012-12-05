matheye
=======

Learn math concepts and operations visually.


Motivation
----------

Much of our early math learning involves memorization; while a kindergartner
can easily enough do addition and subtraction by counting on their fingers,
it's cumbersome until the single-digit sums are memorized. Efficient
multiplication involves memorizing a sizable grid of products which are tedious
to calculate by counting on one's fingers, and difficult to grasp without a
good visual aid.

Physical visual aids, such as adding two piles of pennies, or counting the
studs on an M x N Lego brick, can help with internalizing what's going on when
we do symbolic math with numerals and operators, but it is time-consuming to do
it this way. Computers can show such visualizations immediately, along with
their symbolic representation, giving the child an immediate connection between
"7 * 5 = 35" and the actual quantity that represents.


Goals
-----

Matheye in a way aims to present interactive cheat-sheets of basic mathematics.
It doesn't prompt the user for correct answers; what it does is show all of the
answers, along with a graphical demonstration of why that answer is correct. It
is a sort of numeric playground, a field of numbers to explore.


Implementation
--------------

HTML, Javascript, and CSS.


Ideas
-----

See `multiplication.html` for a prototype. Below are some ASCII-art examples of
how other operations might look and behave. All of these assume very little
interactivity aside from moving the mouse around.

Addition and subtraction
- Numbers 1 to 10 and beyond down the left side
- Hover over row N, and move mouse to the right to see different ways of adding
  or subtracting numbers. Draw boxes so quantities can be visualized, and
  color-code them for the component numbers

Addition:

      1
      2
      3
    > 4 = [1] + [3] [_] [_]
      5    ^
      6

      1
      2
      3
    > 4 = [_] [2] + [2] [_]
      5        ^
      6

      1
      2
      3
    > 4 = [_] [_] [_] [4] + 0
      5                ^
      6

Subtraction:

      1
      2
      3
    > 4 - [1] = [3] [_] [_]
      5    ^
      6

      1
      2
      3
    > 4 - [_] [2] = [2] [_]
      5        ^
      6

      1
      2
      3
    > 4 - [_] [_] [_] [4] = 0
      5                ^
      6

Division:
- Could be a variant of multiplication, but that only gives division without
  remainders
- How could division of whole numbers with remainders be visualized:

The table approach could still be used, but the cell area would be devoted to
showing the quotient and remainder. First, hover over a number in the left
column (the dividend), then slide across the row to pick a divisor. The quotient
is shown as an m x n grid of boxes, with additional boxes for any remainder:

      1
      2
      3
      4    v
    > 5 / [1]
          [_]
          [_]
          [_]
          [_] = 5
                R
                0

      1
      2
      3
      4        v
    > 5 / [_] [2]
          [_] [_] = 2
                    R
              [_]   1

      1
      2
      3
      4            v
    > 5 / [_] [_] [3] = 1
                        R
              [_] [_]   2

      1
      2
      3
      4                v
    > 5 / [_] [_] [_] [4] = 1
                            R
                      [_]   1

      1
      2
      3
      4                    v
    > 5 / [_] [_] [_] [_] [5] = 1
                                R
                                0

      1
      2
      3
      4
      5        v
    > 6 / [_] [2]
          [_] [_]
          [_] [_] = 3
                    R
                    0

      1
      2
      3
      4
      5
      6        v
    > 7 / [_] [2]
          [_] [_]
          [_] [_] = 3
                    R
              [_]   1

License
-------

MIT License.

