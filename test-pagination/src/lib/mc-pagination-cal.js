var mcPaginationCal = function (current, length, displayLength, anchor) {
  const indexes = [1];

  displayLength = displayLength - 2;

  let start = 2;
  let end = start + displayLength - 1;

  if (anchor) {
    anchor--;
  }

  if (anchor && current >= anchor) {
    start = anchor;
  } else {
    start = current;
  }

  end = start + displayLength - 1;
  if (end <= current) {
    start = current;
    end = start + displayLength - 1;
  }


  if (start <= 1) {
    start = 2;
    end = start + displayLength - 1;
  }
  if (end >= length - 1) {
    end = length - 1;
    start = end - displayLength + 1;
    if (start <= 1) {
      start = 2;
    }
  }
  if (start !== 2) {
    indexes.push('...');
  }
  for (let i = start; i <= end; i++) {
    indexes.push(i);
  }
  if (end !== length - 1) {
    indexes.push('...');
  }
  indexes.push(length);
  return indexes;
};

function log(obj) {
  document.write('<p>' + obj + '</p>');
}

log(mcPaginationCal(1, 100, 10));
log(mcPaginationCal(1, 10, 100));
log(mcPaginationCal(50, 100, 10));
log(mcPaginationCal(99, 100, 10));
log(mcPaginationCal(54, 100, 10, 46, 57));
log(mcPaginationCal(52, 100, 10, 48, 57));
