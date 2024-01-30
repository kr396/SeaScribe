export const VISIBILITIES = [
  {
    value: 1,
    label: '0-300m',
  },
  {
    value: 2,
    label: '300-500m',
  },
  {
    value: 3,
    label: '500m-1km',
  },
  {
    value: 4,
    label: '1-3km',
  },
  {
    value: 5,
    label: '3-5km',
  },
  {
    value: 6,
    label: 'unlimited',
  },
];

// CREATE TABLE IF NOT EXISTS cv_visibilities (id integer primary key not null, sort_order integer not null, description text not null)
// INSERT OR IGNORE INTO cv_visibilities VALUES (0, 1, '0-300m')
// INSERT OR IGNORE INTO cv_visibilities VALUES (1, 2, '300-500m')
// INSERT OR IGNORE INTO cv_visibilities VALUES (2, 3, '500m-1km')
// INSERT OR IGNORE INTO cv_visibilities VALUES (3, 4, '1-3km')
// INSERT OR IGNORE INTO cv_visibilities VALUES (4, 5, '3-5km')
// INSERT OR IGNORE INTO cv_visibilities VALUES (5, 6, 'unlimited')
