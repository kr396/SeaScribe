export const SURVEY_PLATFORM_TYPE = [
  {
    value: 1,
    label: 'Watercraft',
  },
  {
    value: 2,
    label: 'Aircraft',
  },
  {
    value: 3,
    label: 'Point Location',
  },
];

// CREATE TABLE IF NOT EXISTS cv_survey_platform_types (id integer primary key not null, sort_order integer not null, display text not null)
// INSERT OR IGNORE INTO cv_survey_platform_types (id, sort_order, display) VALUES (1, 1, 'Watercraft')
// INSERT OR IGNORE INTO cv_survey_platform_types (id, sort_order, display) VALUES (2, 2, 'Aircraft')
// INSERT OR IGNORE INTO cv_survey_platform_types (id, sort_order, display) VALUES (3, 3, 'Point Location')
