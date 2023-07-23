let orderBy = 'year';
let orderBy2 = 'name';

const init = () => {
  computeMissingSpeed();
  computeMissingAidStationTimes();
  displayResults();
};

const computeMissingSpeed = () => {
  results.forEach(result => {
    if (!result.averageSpeed) {
      result.averageSpeed = calculateSpeed(result.timeToZinal);
    }
  });
};

const computeMissingAidStationTimes = () => {
  results.forEach(result => {
    aidStations.forEach((aidStation, i) => {
      const previousAidStation = aidStations[i - 1];
      const lastSplit =
        result['timeFrom' + previousAidStation + 'To' + aidStation];
      if (
        i &&
        !result['timeTo' + aidStation] &&
        result['timeTo' + previousAidStation] &&
        lastSplit
      ) {
        result['timeTo' + aidStation] = addTimes(
          result['timeTo' + previousAidStation],
          lastSplit,
        );
      }
    });
  });
};

const addTimes = (t1, t2) => {
  return formatTime(
    convertStringHoursToDecimal(t1) + convertStringHoursToDecimal(t2),
  );
};

const formatTime = decimalHours => {
  const hours = Math.floor(decimalHours);
  const deciSeconds = decimalHours * 60 * 60 * 10;
  const minutes = Math.floor(deciSeconds / 10 / 60 - hours * 60);
  const seconds = Math.floor(deciSeconds / 10 - hours * 60 * 60 - minutes * 60);
  const tenthOfSecond = Math.floor(
    deciSeconds - hours * 60 * 60 * 10 - minutes * 60 * 10 - seconds * 10,
  );
  return hours + ':' + pad(minutes) + '.' + pad(seconds) + ',' + tenthOfSecond;
};

const pad = number => (('' + number).length === 1 ? '0' + number : number);

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

const buildTableHeader = column => {
  const title = column.displayHeader === false ? '' : column.title;
  return `<th ${getAlign(column)}>${title}</th>`;
};

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

const possiblySkippedCells = [
  //'timeFromChandolinToTignousa',
  'timeToTignousa',
  'timeFromTignousaToWeisshorn',
  //'timeFromWeisshornToBarneuza',
  'timeToBarneuza',
  'timeFromBarneuzaToZinal',
];

const getTableCell = (column, result) => {
  const hasChandoButNotTignousa =
    result.timeToChandolin && !result.timeToTignousa;
  const possiblySkippedCell = possiblySkippedCells.includes(column.key);
  if (possiblySkippedCell && hasChandoButNotTignousa) {
    return '';
  }
  let align = '';
  let colspan = '';
  let columnKey = column.key;
  if (
    hasChandoButNotTignousa &&
    ['timeFromChandolinToTignousa', 'timeFromWeisshornToBarneuza'].includes(
      column.key,
    )
  ) {
    colspan = ' colspan="3"';
    align = 'center';
    if (columnKey === 'timeFromChandolinToTignousa')
      columnKey = 'timeFromChandolinToWeisshorn';
    else columnKey = 'timeFromWeisshornToZinal';
  }
  return (
    '<td ' +
    getAlign(column, align) +
    colspan +
    '>' +
    getTableCellValue(columnKey, result) +
    '</td>'
  );
};

const getTableCellValue = (columnKey, result) => {
  let value = result[columnKey];
  let prefix = '';
  let suffix = '';
  if (columnKey === 'year') {
    prefix = `<a href="${
      sources[result.category][result.year]
    }" target="_blank">`;
    suffix = '</a>';
  } else if (value && columnKey.startsWith('timeFrom')) {
    prefix = '<&nbsp;';
    suffix = '&nbsp;>';
  }

  if (value && columnKey.startsWith('time') && !value.includes(',')) {
    value += ',x';
  }
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

const getAlign = (column, align) =>
  'align="' + (align || column.align || 'right') + '"';
