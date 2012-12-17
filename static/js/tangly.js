// Stuff for Tangle

// Initialize a tangle variable from an element with the given id.
function make_variable(id, min, max, step, format) {
  var elem = $('#' + id);
  elem.attr({
    'class': 'TKAdjustableNumber',
    'data-var': id,
    'data-min': min,
    'data-max': max
  });
  if (step) { elem.attr('data-step', step); }
  if (format) { elem.attr('data-format', format); }
}

