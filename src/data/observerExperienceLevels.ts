export const OBSERVER_EXPERIENCE_LEVELS = [
  {
    value: 1,
    label: 'None',
  },
  {
    value: 2,
    label: 'Training',
  },
  {
    value: 3,
    label: 'Beginner',
  },
  {
    value: 4,
    label: 'Intermediate',
  },
  {
    value: 5,
    label: 'Expert',
  },
];

// CREATE TABLE IF NOT EXISTS cv_observer_experience_levels (id integer primary key not null, sort_order integer not null, display text not null)
// INSERT OR IGNORE INTO cv_observer_experience_levels VALUES (1, 1, 'None')
// INSERT OR IGNORE INTO cv_observer_experience_levels VALUES (2, 2, 'Training')
// INSERT OR IGNORE INTO cv_observer_experience_levels VALUES (3, 3, 'Beginner')
// INSERT OR IGNORE INTO cv_observer_experience_levels VALUES (4, 4, 'Intermediate')
// INSERT OR IGNORE INTO cv_observer_experience_levels VALUES (5, 5, 'Expert')
