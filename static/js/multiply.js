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
function make_cell(a, b) {
  var td = $('<td/>');
  td.attr({
    'data-a': a,
    'data-b': b
  });
  td.addClass('product');
  td.html(a*b);
  // Display highlights and equation when the cell is hovered
  td.hover(function() {
    apply_highlights(a, b);
    update_equations($(this).data('a'), $(this).data('b'));
    $(this).addClass('selected');
  }, function() {
    remove_highlights();
    clear_equations();
    $('#equation').html('');
  });
  return td;
}

// Make and return a header row for the 'b' factors
function make_header_row() {
  var tr = $('<tr/>');
  tr.append('<th/>');
  for (var b=1; b<=10; b++) {
    var th = $('<th/>');
    th.html(b);
    th.attr('data-b', b);
    th.addClass('factor');
    tr.append(th);
  }
  return tr;
}

// Build and return a multiplication table
function make_table() {
  var table = $('<table/>');
  var tr = make_header_row();
  table.append(tr);
  for (var a=1; a<=10; a++) {
    var row = $('<tr/>');
    var th = $('<th/>');
    th.html(a);
    th.attr('data-a', a);
    th.addClass('factor');
    row.append(th);
    for (var b=1; b<=10; b++) {
      var td = make_cell(a, b);
      row.append(td);
    }
    table.append(row);
  }
  return table;
}

// Update the equation to show the product of 'a' and 'b'
function update_equations(a, b) {
  var ul = $('<ul/>');
  ul.append('<li>' + a + ' &times; ' + b + ' = ' + a*b + '<\/li>');
  ul.append('<li>' + b + ' &times; ' + a + ' = ' + a*b + '<\/li>');

  clear_equations();
  $('#equations').append(ul);
}

function clear_equations() {
  $('#equations').empty();
}

$(document).ready(function() {
  table = make_table();
  $('div#multiplication').html(table);
});

