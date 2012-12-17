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

Some design principles:

- Show, don't tell: Use words minimally. Words are language-specific, and
  mathematics is the language of focus here. Pop-ups or sidebars with
  explanations, terminology and so forth might be OK, but they should be
  nonessential.

- Illustrate clearly: Strong focus on legibility, good color choices, use of
  whitespace, appropriate font sizes and styles. Avoid eye candy, animation,
  embellishments, and other distractions unless they directly contribute to
  comprehension.

- Usability: Equally usable with a mouse or touch-screen. The UI must be
  discoverable, responsive, clean and compact. Navigation should encourage
  exploration, with many paths to each destination.


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


References
----------

- The `Math is Fun`_ website includes some examples that are very similar to
  ones I've independently thought of for Matheye, including a `multiplication
  table`_ and `quadratic equation graph`_.

.. _Math is Fun: http://www.mathisfun.com/
.. _multiplication table: http://www.mathsisfun.com/tables.html
.. _quadratic equation graph: http://www.mathsisfun.com/algebra/quadratic-equation-graph.html

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
  hyperbola, sine/cosine, quadratic equation etc.)

- Trigonometry: Interactive triangle with angles labeled, direct visualization
  of sin/cos/tan functions. Corners of triangle can be dragged to change its
  shape; the length of sides can be dragged to change the length of one side.

- Scrubbing-calculator-style solving of algebraic equations. For each variable,
  allow the user to slide their value up and down, to immediately see how it
  gets closer or further from a solution. Example::

    x = ?
    5*x = 35        Hover 'x' or '?' and drag. Start x at some default like 0.

    x = 0           Indicate current value of x
    5*0 = 0         Show evaluated equation; color-code red if it's no good
        < 35        Show relationship to target value

    x = 6
    5*6 = 30
        < 35

    x = 8
    5*8 = 40
        > 35        Too far!

    x = 7
    5*7 = 35        Color-code green and/or make bold when a solution is found



License
-------

`MIT License`_.

.. _MIT License: http://opensource.org/licenses/MIT

