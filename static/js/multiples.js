function number_cell(number) {
  var td = elem('td').html(number)
    .addClass(number_classes(number))
    .attr('data-value', number);
  // On hover, highlight all multiples of this number
  td.hover(
    function() {
      $('td').removeClass('highlight');
      highlight_multiples($(this).data('value'));
    },
    function() {
      $('td').removeClass('highlight');
    }
  );
  return td;
}

// Return a table containing the numbers 1-100
function hundred_table() {
  var table = elem('table').addClass('point');
  for (var a=0; a<10; a++) {
    var tr = elem('tr');
    for (var b=1; b<=10; b++) {
      var td = number_cell(a*10 + b);
      tr.append(td);
    }
    table.append(tr);
  }
  return table;
}

// Highlight all multiples of the given divisor in the table
function highlight_multiples(divisor) {
  $('td').each(function() {
    if ($(this).data('value') % divisor == 0) {
      $(this).addClass('highlight');
    }
  });
}

