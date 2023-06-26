const birthdates = {
  Maman: '1953-01-24',
  Papa: '1953-08-27',
  Nicolas: '1980-06-30',
  'Martin D.': '1981-12-04',
  Alexandre: '1985-07-01',
  Augustin: '1987-04-15',
  Juliette: '1992-09-26',
};

const tableColumns = [
  {
    title: 'Participant(e)',
    key: 'name',
    align: 'left',
  },
  {
    title: 'Année',
    key: 'year',
  },
  {
    title: 'Catégorie',
    key: 'category',
    align: 'left',
  },
  {
    title: 'Temps',
    key: 'totalTime',
  },
  {
    title: 'Vitesse moyenne (min/km)',
    key: 'averageSpeed',
  },
  {
    title: 'Ponchette',
    key: 'timeToPonchette',
  },
  {
    title: 'Ponchette - Chandolin',
    key: 'timeFromPonchetteToChandolin',
  },
  {
    title: 'Chandolin',
    key: 'timeToChandolin',
  },
  {
    title: 'Chandolin - Weisshorn',
    key: 'timeFromChandolinToWeisshorn',
  },
  {
    title: 'Weisshorn',
    key: 'timeToWeisshorn',
  },
  {
    title: 'Weisshorn - Zinal',
    key: 'timeFromWeisshornToZinal',
  },
];

const results = [
  {name: 'Martin D.', year: 2003, category: 'Touriste', totalTime: '5:24.03,9'},
  {name: 'Nicolas', year: 2003, category: 'Touriste', totalTime: '5:19.53,8'},
  {name: 'Alexandre', year: 2004, category: 'Touriste', totalTime: '4:47.38,8'},
  {name: 'Maman', year: 2004, category: 'Touriste', totalTime: '8:59.25,1'},
  {name: 'Papa', year: 2004, category: 'Touriste', totalTime: '6:36.03,2'},
  {name: 'Alexandre', year: 2005, category: 'Touriste', totalTime: '4:54.20,8'},
  {name: 'Augustin', year: 2005, category: 'Touriste', totalTime: '4:23.26,3'},
  {name: 'Maman', year: 2005, category: 'Touriste', totalTime: '7:52.18,6'},
  {name: 'Papa', year: 2005, category: 'Touriste', totalTime: '6:17.23,1'},
  {name: 'Martin D.', year: 2005, category: 'Touriste', totalTime: '4:20.43,9'},
  {name: 'Nicolas', year: 2005, category: 'Touriste', totalTime: '4:26.13,8'},
  {
    name: 'Alexandre',
    year: 2007,
    category: 'Touriste',
    totalTime: '4:40.27,1',
    timeToChandolin: '2:15.01',
    timeFromChandolinToWeisshorn: '1:07.59',
    timeToWeisshorn: '3:23.00',
    timeFromWeisshornToZinal: '1:17.26',
  },
  {
    name: 'Augustin',
    year: 2007,
    category: 'Touriste',
    totalTime: '4:32.30,1',
    timeToChandolin: '2:04.11',
    timeFromChandolinToWeisshorn: '1:07.27',
    timeToWeisshorn: '3:11.39',
    timeFromWeisshornToZinal: '1:20.51',
  },
  {
    name: 'Papa',
    year: 2007,
    category: 'Touriste',
    totalTime: '7:04.53,4',
    timeToChandolin: '3:13.21',
    timeFromChandolinToWeisshorn: '1:41.36',
    timeToWeisshorn: '4:54.57',
    timeFromWeisshornToZinal: '2:09.55',
  },
  {
    name: 'Martin D.',
    year: 2007,
    category: 'Touriste',
    totalTime: '4:24.24,9',
    timeToChandolin: '2:01.03',
    timeFromChandolinToWeisshorn: '1:02.30',
    timeToWeisshorn: '3:03.33',
    timeFromWeisshornToZinal: '1:20.51',
  },
  {
    name: 'Nicolas',
    year: 2007,
    category: 'Touriste',
    totalTime: '4:54.33,4',
    timeToChandolin: '2:15.02',
    timeFromChandolinToWeisshorn: '1:11.12',
    timeToWeisshorn: '3:26.14',
    timeFromWeisshornToZinal: '1:28.18',
  },
  {
    name: 'Augustin',
    year: 2008,
    category: 'Touriste',
    totalTime: '4:17.51,4',
    timeToChandolin: '1:58.50',
    timeFromChandolinToWeisshorn: '1:02.42',
    timeToWeisshorn: '3:01.33',
    timeFromWeisshornToZinal: '1:16.18',
  },
  {
    name: 'Martin D.',
    year: 2008,
    category: 'Touriste',
    totalTime: '4:16.41,9',
    timeToChandolin: '1:54.57',
    timeFromChandolinToWeisshorn: '1:01.12',
    timeToWeisshorn: '2:56.09',
    timeFromWeisshornToZinal: '1:20.32',
  },
  {
    name: 'Alexandre',
    year: 2013,
    category: 'Touriste',
    totalTime: '4:40.49,2',
    averageSpeed: '9.03',
    timeToChandolin: '2:10.26',
    timeFromChandolinToWeisshorn: '1:07.16',
    timeToWeisshorn: '3:17.42',
    timeFromWeisshornToZinal: '1:23.06',
  },
  {
    name: 'Augustin',
    year: 2013,
    category: 'Touriste',
    totalTime: '4:40.30,8',
    averageSpeed: '9.02',
    timeToChandolin: '2:05.40',
    timeFromChandolinToWeisshorn: '1:12.02',
    timeToWeisshorn: '3:17.43',
    timeFromWeisshornToZinal: '1:22.47',
  },
  {
    name: 'Maman',
    year: 2013,
    category: 'Touriste',
    totalTime: '8:04.14,4',
    averageSpeed: '15.37',
    timeToChandolin: '3:38.20',
    timeFromChandolinToWeisshorn: '1:52.06',
    timeToWeisshorn: '5:30.26',
    timeFromWeisshornToZinal: '2:33.47',
  },
  {
    name: 'Papa',
    year: 2013,
    category: 'Touriste',
    totalTime: '7:18.35,7',
    averageSpeed: '14.08',
    timeToChandolin: '3:21.46',
    timeFromChandolinToWeisshorn: '1:45.04',
    timeToWeisshorn: '5:06.50',
    timeFromWeisshornToZinal: '2:11.45',
  },
  {
    name: 'Juliette',
    year: 2013,
    category: 'Touriste',
    totalTime: '6:49.07,2',
    averageSpeed: '13.11',
    timeToChandolin: '3:06.42',
    timeFromChandolinToWeisshorn: '1:38.39',
    timeToWeisshorn: '4:45.21',
    timeFromWeisshornToZinal: '2:03.45',
  },
  {
    name: 'Martin D.',
    year: 2013,
    category: 'Touriste',
    totalTime: '4:11.00,3',
    averageSpeed: '8.05',
    timeToChandolin: '2:00.06',
    timeFromChandolinToWeisshorn: '59.06',
    timeToWeisshorn: '2:59.12',
    timeFromWeisshornToZinal: '1:11.47',
  },
  {
    name: 'Nicolas',
    year: 2013,
    category: 'Touriste',
    totalTime: '5:04.13,0',
    averageSpeed: '9.48',
    timeToChandolin: '2:17.16',
    timeFromChandolinToWeisshorn: '1:13.56',
    timeToWeisshorn: '3:31.12',
    timeFromWeisshornToZinal: '1:33.00',
  },
  {
    name: 'Maman',
    year: 2016,
    category: 'Touriste',
    totalTime: '8:24.49,9',
    averageSpeed: '16.17',
    timeToPonchette: '2:33.10',
    timeFromPonchetteToChandolin: '1:04.01',
    timeToChandolin: '3:37.11',
    timeFromChandolinToWeisshorn: '2:00.42',
    timeToWeisshorn: '5:37.54',
    timeFromWeisshornToZinal: '2:46.55',
  },
  {
    name: 'Augustin',
    year: 2016,
    category: 'Coureur',
    totalTime: '4:50.56,7',
    averageSpeed: '9.23',
    timeToPonchette: '1:32.50',
    timeFromPonchetteToChandolin: '34.59',
    timeToChandolin: '2:07.50',
    timeFromChandolinToWeisshorn: '1:17.47',
    timeToWeisshorn: '3:25.37',
    timeFromWeisshornToZinal: '1:25.19',
  },
  {
    name: 'Papa',
    year: 2016,
    category: 'Coureur',
    timeToPonchette: '2:24.54',
  },
  {
    name: 'Nicolas',
    year: 2017,
    category: 'Coureur',
    totalTime: '4:17.30,4',
    averageSpeed: '8.18',
    timeToPonchette: '1:21.22',
    timeFromPonchetteToChandolin: '27.38',
    timeToChandolin: '1:49.00',
    timeFromChandolinToWeisshorn: '1:04.04',
    timeToWeisshorn: '2:53.05',
    timeFromWeisshornToZinal: '1:24.25',
  },
  {
    name: 'Alexandre',
    year: 2018,
    category: 'Touriste',
    totalTime: '4:26.52,8',
    averageSpeed: '8.36',
    timeToPonchette: '1:26.19',
    timeFromPonchetteToChandolin: '33.37',
    timeToChandolin: '1:59.57',
    timeFromChandolinToWeisshorn: '1:04.37',
    timeToWeisshorn: '3:04.34',
    timeFromWeisshornToZinal: '1:22.17',
  },
  {
    name: 'Augustin',
    year: 2018,
    category: 'Touriste',
    totalTime: '4:42.20,1',
    averageSpeed: '9.06',
    timeToPonchette: '1:28.51',
    timeFromPonchetteToChandolin: '34.03',
    timeToChandolin: '2:02.55',
    timeFromChandolinToWeisshorn: '1:12.43',
    timeToWeisshorn: '3:15.38',
    timeFromWeisshornToZinal: '1:26.41',
  },
  {
    name: 'Maman',
    year: 2018,
    category: 'Touriste',
    totalTime: '8:36.35,1',
    averageSpeed: '16.39',
    timeToPonchette: '2:32.54',
    timeFromPonchetteToChandolin: '1:05.51',
    timeToChandolin: '3:38.46',
    timeFromChandolinToWeisshorn: '2:03.54',
    timeToWeisshorn: '5:42.40',
    timeFromWeisshornToZinal: '2:53.54',
  },
  {
    name: 'Papa',
    year: 2018,
    category: 'Touriste',
    totalTime: '9:04.58,2',
    averageSpeed: '17.34',
    timeToPonchette: '2:33.50',
    timeFromPonchetteToChandolin: '1:01.23',
    timeToChandolin: '3:35.14',
    timeFromChandolinToWeisshorn: '2:03.22',
    timeToWeisshorn: '5:38.36',
    timeFromWeisshornToZinal: '3:26.21',
  },
  {
    name: 'Juliette',
    year: 2018,
    category: 'Touriste',
    totalTime: '5:45.56,2',
    averageSpeed: '11.09',
    timeToPonchette: '1:54.44',
    timeFromPonchetteToChandolin: '41.25',
    timeToChandolin: '2:36.09',
    timeFromChandolinToWeisshorn: '1:25.43',
    timeToWeisshorn: '4:01.53',
    timeFromWeisshornToZinal: '1:44.03',
  },
  {
    name: 'Martin D.',
    year: 2018,
    category: 'Touriste',
    totalTime: '4:07.26,4',
    averageSpeed: '7.58',
    timeToPonchette: '1:19.02',
    timeFromPonchetteToChandolin: '29.44',
    timeToChandolin: '1:48.46',
    timeFromChandolinToWeisshorn: '1:01.47',
    timeToWeisshorn: '2:50.34',
    timeFromWeisshornToZinal: '1:16.52',
  },
  {
    name: 'Nicolas',
    year: 2018,
    category: 'Touriste',
    totalTime: '4:08.36,4',
    averageSpeed: '8.01',
    timeToPonchette: '1:22.03',
    timeFromPonchetteToChandolin: '30.14',
    timeToChandolin: '1:52.17',
    timeFromChandolinToWeisshorn: '1:02.03',
    timeToWeisshorn: '2:54.21',
    timeFromWeisshornToZinal: '1:14.15',
  },
  {
    name: 'Augustin',
    year: 2019,
    category: 'Touriste',
    totalTime: '4:58.20,9',
    averageSpeed: '9.37',
    timeToPonchette: '1:34.47',
    timeFromPonchetteToChandolin: '37.15',
    timeToChandolin: '2:12.02',
    timeFromChandolinToWeisshorn: '1:18.23',
    timeToWeisshorn: '3:30.26',
    timeFromWeisshornToZinal: '1:27.54',
  },
];

sources = {
  Touriste: {
      2003: 'https://services.datasport.com/2003/lauf/zinal/rang006.htm',
      2004: 'https://services.datasport.com/2004/lauf/zinal/rang006.htm',
      2005: 'https://services.datasport.com/2005/lauf/zinal/rang006.htm',
      2007: 'https://services.datasport.com/2007/lauf/zinal/rang021.htm',
      2008: 'https://services.datasport.com/2008/lauf/zinal/rang021.htm',
      2013: 'https://services.datasport.com/2013/lauf/zinal/rang021.htm',
      2016: 'https://services.datasport.com/2016/lauf/zinal/rang021.htm',
      2018: 'https://services.datasport.com/2018/lauf/zinal/rang021.htm',
      2019: 'https://services.datasport.com/2019/lauf/zinal/rang021.htm',
  },
  Coureur: {
      2016: 'https://services.datasport.com/2016/lauf/zinal/rang091.htm',
      2017: 'https://services.datasport.com/2017/lauf/zinal/rang091.htm',
  },
};
