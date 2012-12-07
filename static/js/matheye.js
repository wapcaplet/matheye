function clear_equations() {
  $('#equations').empty();
}

// Return an empty element for the given tag
function elem(tag) {
  return $('<' + tag + '/>');
}

function li(content) {
  return elem('li').html(content);
}

// Draw a box using a span
function box(content, cls) {
  if (!content) { content = '&nbsp;'; }
  cls = cls + ' box';
  return $('<span class="' + cls + '"/>').html(content);
}

function number_box(number, cls) {
  return box(number, 'number ' + cls);
}

function operator_box(operator) {
  return box(operator, 'operator');
}

function times_box() {
  return operator_box('&times;');
}

function plus_box() {
  return operator_box('+');
}

function minus_box() {
  return operator_box('-');
}

function divide_box() {
  return operator_box('&divide;');
}

function equals_box() {
  return operator_box('=');
}
