// Apply appropriate highlights to cells in the table, including:
// - Current product
// - Current 'a' and 'b' factor headings
// - All inner cells for factors <= a, <= b
function apply_highlights(a, b) {
  // Highlight the factor headings
  $('th.factor').each(function() {
    if ($(this).data('a') == a || $(this).data('b') == b) {
      $(this).addClass('selected');
    }
    else {
      $(this).removeClass('selected');
    }
  });
  // Highlight the inner cells
  $('td.product').each(function() {
    $(this).removeClass('selected');
    if ($(this).data('a') <= a && $(this).data('b') <= b) {
      $(this).addClass('highlight');
    }
    else {
      $(this).removeClass('highlight');
    }
  })
}

// Remove all highlights
function remove_highlights() {
  $('.product').removeClass('highlight');
  $('.product').removeClass('selected');
  $('.factor').removeClass('selected');
}

// Make a cell for the product of 'a' and 'b'
function multiplication_cell(a, b) {
  var td = elem('td').html(a*b).addClass('product').attr({
    'data-a': a,
    'data-b': b
  })
  // Display highlights and equation when the cell is hovered
  td.hover(function() {
    apply_highlights(a, b);
    update_multiplication_equations($(this).data('a'), $(this).data('b'));
    $(this).addClass('selected');
  }, function() {
    remove_highlights();
    clear_equations();
    $('#equation').html('');
  });
  return td;
}

// Make and return a header row for the 'b' factors
function multiplication_header_row() {
  var tr = elem('tr')
    .append(elem('th'));
  for (var b=1; b<=10; b++) {
    var th = elem('th').html(b).attr('data-b', b).addClass('factor');
    tr.append(th);
  }
  return tr;
}

// Build and return a multiplication table
function multiplication_table() {
  var table = elem('table');
  var tr = multiplication_header_row();
  table.append(tr);
  for (var a=1; a<=10; a++) {
    var row = elem('tr');
    var th = elem('th').html(a).attr('data-a', a).addClass('factor');
    row.append(th);
    for (var b=1; b<=10; b++) {
      var td = multiplication_cell(a, b);
      row.append(td);
    }
    table.append(row);
  }
  return table;
}

// Update the equation to show the product of 'a' and 'b'
function update_multiplication_equations(a, b) {
  var ul = elem('ul')
    .append(li(a + ' &times; ' + b + ' = ' + a*b))
    .append(li(b + ' &times; ' + a + ' = ' + a*b));

  clear_equations();
  $('#equations').append(ul);
}

$(document).ready(function() {
  table = multiplication_table();
  $('div#multiplication').html(table);
});

