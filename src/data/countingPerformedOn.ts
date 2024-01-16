export const COUNTING_PERFORMED_ON = [
  {
    value: 1,
    label: 'One Side',
  },
  {
    value: 2,
    label: 'Both Sides',
  },
];

// CREATE TABLE IF NOT EXISTS cv_counting_performed_on (id integer primary key not null, sort_order integer not null, display text not null)
// INSERT OR IGNORE INTO cv_counting_performed_on (id, sort_order, display) VALUES (1, 1, 'One Side')
// INSERT OR IGNORE INTO cv_counting_performed_on (id, sort_order, display) VALUES (2, 2, 'Both Sides')
