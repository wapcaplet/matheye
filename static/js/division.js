// Return an HTML element displaying the result of dividing numerator by
// denominator. The result includes the quotient and remainder.
function show_division(numerator, denominator) {
  var quotient = Math.floor(numerator / denominator);
  var remainder = numerator % denominator;

  var table = elem('table').addClass('squares');

  // quotient * rows
  for (var q = 1; q <= quotient; q++) {
    var tr = elem('tr');
    // Show quotient header in last row
    if (q == quotient) {
      tr.append(elem('th').html(quotient));
    }
    // Otherwise, empty header
    else {
      tr.append(elem('th').html(''));
    }
    // numerator * cells
    append_cells(tr, denominator);
    table.append(tr);
  }

  // One more row for remainder, if there is one
  if (remainder > 0) {
    var tr = elem('tr').addClass('remainder');
    tr.append(elem('th').html('R'));
    append_cells(tr, remainder, remainder);
    table.append(tr);
  }

  return table;
}

