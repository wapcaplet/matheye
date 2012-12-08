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
  if (!cls) { cls = 'box'; }
  else { cls = cls + ' box'; }
  return $('<span class="' + cls + '"/>').html(content);
}

function number_box(number, cls) {
  if (!cls) { cls = 'number'; }
  else { cls = cls + ' number'; }
  return box(number, cls);
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

// Return a string of classes for the given number, including
// 'even', 'odd', or 'prime'
function number_classes(number) {
  var classes = '';
  if (number % 2 == 0) {
    classes = 'even';
  }
  else {
    classes = 'odd';
  }
  if (is_prime(number)) {
    classes += ' prime';
  }
  return classes;
}

// Quick-and-dirty prime detector
function is_prime(n)
{
  if (n < 2) { return false; }
  var q = Math.sqrt(n);
  for (var i = 2; i <= q; i++)
  {
    if (n % i == 0)
    {
      return false;
    }
  }
  return true;
}

