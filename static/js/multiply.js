// Apply appropriate highlights to cells in the table, including:
// - Current product
// - Current 'a' and 'b' factor headings
// - All inner cells for factors <= a, <= b
function apply_highlights(a, b) {
  // Remove existing highlights on factors and products
  $('th.factor')
    .removeClass('selected');
  $('td.product')
    .removeClass('selected')
    .removeClass('highlight');

  // Highlight the new factor headings
  $('th.factor[data-a=' + a + ']').addClass('selected');
  $('th.factor[data-b=' + b + ']').addClass('selected');

  // Show the current product as selected
  $('td.product')
    .filter('[data-a=' + a + ']')
    .filter('[data-b=' + b + ']')
    .addClass('selected');

  // Highlight all cells in an a x b grid up to this product
  $('td.product').filter(function() {
    return $(this).data('a') <= a && $(this).data('b') <= b
  }).addClass('highlight');
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
  td.hover(
    function() {
      apply_highlights(a, b);
      update_multiplication_equations($(this).data('a'), $(this).data('b'));
    },
    function() {
      remove_highlights();
      clear_equations();
    }
  );
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

