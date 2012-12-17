// Graphing support

// Return solution points for y = ax^2 + bx + c
function ax2_bx1_cx0_solutions(a, b, c) {
  var sqrt_disc = Math.sqrt(b*b - 4.0*a*c);
  var x1 = (-1.0*b + sqrt_disc) / (2.0*a);
  var x2 = (-1.0*b - sqrt_disc) / (2.0*a);
  var points = new Array();
  points.push([x1, 0]);
  points.push([x2, 0]);
  return points;
}

// Return solution points for y = mx + b
function linear_solution(m, b) {
  var points = new Array();
  var x = (-1.0*b) / m;
  points.push([x, 0]);
  return points;
}

// Return points for a curve ax^2 + bx + c
function ax2_bx1_cx0(a, b, c, xmin, xmax) {
  var points = new Array();
  for (var x = xmin*4; x<= xmax*4; x += 1) {
    var xs = x*0.25; // Scaled down
    points.push([xs, a*xs*xs + b*xs + c]);
  }
  return points
}

// Return points for a line in slope-intercept form (y = mx + b)
function linear(m, b, xmin, xmax) {
  var points = new Array();
  points.push([xmin, m*xmin + b]);
  points.push([xmax, m*xmax + b]);
  return points
}

// Return points describing a horizontal line at y=c
function horizontal(c, xmin, xmax) {
  var points = new Array();
  points.push([xmin, c]);
  points.push([xmax, c]);
  return points;
}

