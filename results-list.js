let orderBy = 'year';
let orderBy2 = 'name';

const init = () => {
  computeMissingSpeed();
  displayResults();
};

const computeMissingSpeed = () => {
  results.forEach(result => {
    if (!result.averageSpeed) {
      result.averageSpeed = calculateSpeed(result.timeToZinal);
    }
  });
};

const displayResults = () => {
  document.querySelector('main').innerHTML = getFilters() + getResultsTable();
  setupEventHandlers();
};

const setupEventHandlers = () => {
  document.getElementById('order-by').addEventListener('change', event => {
    orderBy = event.target.value;
    displayResults();
  });
  document.getElementById('order-by-2').addEventListener('change', event => {
    orderBy2 = event.target.value;
    displayResults();
  });
};

const getFilters = () =>
  '<div>Ordonner par ' +
  getOrderByListbox('order-by', orderBy) +
  ' puis ' +
  getOrderByListbox('order-by-2', orderBy2) +
  '</div>';

const getOrderByListbox = (id, value) => {
  const options = tableColumns.map(
    column =>
      `<option value="${column.key}" ${
        column.key === value ? 'selected' : ''
      }>${column.title}</option>`,
  );
  return `<select id="${id}">${options}</select>`;
};

const getResultsTable = () => {
  return '<table>' + getTableHeaders() + getTableRows() + '</table>';
};

const getTableHeaders = () => {
  return (
    '<thead><tr>' +
    tableColumns.map(buildTableHeader).join('') +
    '</tr></thead>'
  );
};

const buildTableHeader = column =>
  `<th ${getAlign(column)}>${column.title}</th>`;

const getTableRows = () =>
  results
    .sort(sortFunction)
    .map(getTableRow)
    .join('');

const sortFunction = (result1, result2, givenSortKey) => {
  const sortKey = givenSortKey || orderBy;
  let val1 = result1[sortKey];
  let val2 = result2[sortKey];
  if (val1 === val2) {
    return givenSortKey ? 0 : sortFunction(result1, result2, orderBy2);
  }
  if (typeof val1 === 'undefined') return 1;
  if (typeof val2 === 'undefined') return -1;
  if (!['name', 'year', 'category'].includes(sortKey)) {
    val1 = convertStringHoursToDecimal(val1);
    val2 = convertStringHoursToDecimal(val2);
  }
  if (val1 < val2) return -1;
  if (val1 > val2) return 1;
};

const getTableRow = result => {
  return (
    '<tr>' +
    tableColumns.map(column => getTableCell(column, result)).join('') +
    '</tr>'
  );
};

const getTableCell = (column, result) => {
  return (
    '<td ' +
    getAlign(column) +
    '>' +
    getTableCellValue(column, result) +
    '</td>'
  );
};

const getTableCellValue = (column, result) => {
  let prefix = '';
  let suffix = '';
  if (column.key === 'year') {
    prefix = `<a href="${
      sources[result.category][result.year]
    }" target="_blank">`;
    suffix = '</a>';
  }
  const value = result[column.key];
  return prefix + (value || '-') + suffix;
};

const round = number => Math.round(number * 100, 2) / 100;

const calculateSpeed = time => {
  if (!time) return undefined;
  const timeInMinutes = convertStringHoursToDecimal(time) * 60;
  return formatSpeed(timeInMinutes / 31);
};

const formatSpeed = decimalMinutes => {
  const minutes = Math.floor(decimalMinutes);
  const seconds = Math.floor((decimalMinutes - minutes) * 60);
  return minutes + '.' + (seconds < 10 ? '0' : '') + seconds;
};

const convertStringHoursToDecimal = time => {
  const hoursAndMinutes = time.split(':');
  let hours = 0;
  let minutes;
  if (hoursAndMinutes.length === 2) {
    hours = parseInt(hoursAndMinutes[0], 10);
    minutes = hoursAndMinutes[1];
  } else {
    minutes = hoursAndMinutes[0];
  }
  return hours + convertStringMinutesToDecimal(minutes) / 60;
};

const convertStringMinutesToDecimal = time => {
  const minutesAndSeconds = time.split('.');
  const minutes = parseInt(minutesAndSeconds[0], 10);
  const seconds = minutesAndSeconds[1];
  return minutes + convertStringSecondsToDecimal(seconds) / 60;
};

const convertStringSecondsToDecimal = time => {
  const secondsAndDeciSeconds = time.split(',');
  const seconds = parseInt(secondsAndDeciSeconds[0], 10);
  const deciSeconds = secondsAndDeciSeconds[1] || 0;
  return seconds + parseInt(deciSeconds, 10) / 10;
};

const getAlign = column => 'align="' + (column.align || 'right') + '"';
