matheye
=======

Learn math concepts and operations visually. Check out the `live demo`_.

.. _live demo: http://matheye.herokuapp.com


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

Matheye in a way aims to present interactive cheat-sheets of basic mathematics,
targeted toward children or beginners who are learning math concepts for the
first time. It doesn't prompt for answers or do grading of any kind; it's simply
a tool for explanation and exploration.

Short-term, it will include fundamental concepts with whole numbers: addition,
subtraction, multiplication, division with remainders, prime numbers, factors,
and multiples. Longer-term, it might expand to include fractions, functions,
trigonometry, algebra, and calculus.


Implementation
--------------

HTML, Javascript, and CSS.


Install and run
---------------

Get the source using git::

    $ git clone git://github.com/wapcaplet/matheye.git

Install virtualenv_ (good) or virtualenvwrapper_ (better). Then install the
prerequisites::

    $ pip install -r requirements.txt

If that works, you should now be able to do::

    $ python app.py

Then load http://localhost:5000/ in your browser.

.. _virtualenv: http://www.virtualenv.org/en/latest/
.. _virtualenvwrapper: http://www.doughellmann.com/projects/virtualenvwrapper/



Ideas
-----

Addition and subtraction

- Numbers 1 to 10 and beyond down the left side
- Hover over row N, and move mouse to the right to see different ways of adding
  or subtracting numbers. Draw boxes so quantities can be visualized, and
  color-code them for the component numbers

Addition::

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

Subtraction::

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

The table approach could still be used, but the cell area would be devoted to
showing the quotient and remainder. First, hover over a number in the left
column (the dividend), then slide across the row to pick a divisor. The quotient
is shown as an m x n grid of boxes, with additional boxes for any remainder::

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

Future ideas
------------

- Square roots: Show a number with its square root in grid form. When N is 9, then
  the grid is 3x3. When N is not a perfect square, the grid shows fractional
  squares to illustrate the concept of filling the grid with N squares.

- Fractions: Show a number line, and a fraction with draggable numerator and
  denominator. Changing the denominator causes tick marks to be shown at those
  intervals; changing the numerator shows filled blocks between the tick marks::

    0           1           2
    |xxx|xxx|   |   |   |   |  ...    ** 2 / 3 **

    0           1           2
    |xx|xx|xx|  |  |  |  |  |  ...    ** 3 / 4 **

    0           1           2
    |xx|xx|xx|xx|xx|  |  |  |  ...    ** 5 / 4 **

- Realtime function graphing: Show an x/y plot, with equations that can be
  modified tangle-style, showing the results immediately on the plot. Include a
  selection of interesting functions (straight lines, ellipse, parabola,
  hyperbola, sine/cosine, etc.)

- Trigonometry: Interactive triangle with angles labeled, direct visualization
  of sin/cos/tan functions. Corners of triangle can be dragged to change its
  shape; the length of sides can be dragged to change the length of one side.


License
-------

`MIT License`_.

.. _MIT License: http://opensource.org/licenses/MIT

