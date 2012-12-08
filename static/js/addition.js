
/*
Show a visualization of addition or subtraction, given a sum and one term. For
example, if the user has highlighted row 5 (the sum), and moved over to column
3 (the term), then a visualization would look something like this (addition):

  5 = [_] [_] [3] + [_] [2]

Or this (subtraction):

  5 - [_] [_] [3] = [_] [2]

For sum = 7 and term = 2, using addition:

  7 = [_] [2] + [_] [_] [_] [_] [5]

Or subtraction:

  7 - [_] [2] = [_] [_] [_] [_] [5]

*/
function show_sum(add_or_subtract, sum, term) {
  var block = $('<div/>');

  block.append(box(sum));

  // Boxes for the term, with number in the last box
  for (var t=1; t<term; t++) {
    block.append(box('&nbsp;', add_or_subtract));
  }

  // '=' or '-'
  if (add_or_subtract == 'add') {
    block.append(number_box('=&nbsp;' + term, add_or_subtract));
  }
  else {
    block.append(number_box('&minus;&nbsp;' + term, add_or_subtract));
  }

  // Boxes for the result, with number in the first box
  var result = sum - term;
  // '+' or '='
  if (add_or_subtract == 'add') {
    block.append(number_box('&plus;&nbsp;' + result));
  }
  else {
    block.append(number_box('=&nbsp;' + result));
  }
  for (var t=1; t<result; t++) {
    block.append(number_box());
  }

  return block;
}

// Show a visualization of addition
function show_addition(sum, term) {
  return show_sum('add', sum, term);
}

// Show a visualization of subtraction
function show_subtraction(sum, term) {
  return show_sum('subtract', sum, term);
}

