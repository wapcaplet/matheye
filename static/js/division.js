// Return an HTML element displaying the result of dividing numerator by
// denominator. The result includes the quotient and remainder.
function show_division(numerator, denominator) {
  var quotient = Math.floor(numerator / denominator);
  var remainder = numerator % denominator;

  var table = elem('table');

  // quotient * rows
  for (var q = 1; q <= quotient; q++) {
    var tr = elem('tr');
    // numerator * cells
    append_cells(tr, denominator, '', denominator);
    table.append(tr);
  }

  // One more row for remainder
  var tr = elem('tr');
  append_cells(tr, remainder, '', 'R ' + remainder, 'remainder');
  table.append(tr);

  return table;
}

