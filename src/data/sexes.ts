export const SEXES = [
  {
    value: 'M',
    sortOrder: 1,
    label: 'Male',
  },
  {
    value: 'F',
    sortOrder: 2,
    label: 'Female',
  },
  {
    value: 'U',
    sortOrder: 3,
    label: 'Unknown',
  },
];
// CREATE TABLE IF NOT EXISTS cv_sexes (id text primary key not null, sort_order integer not null, description text not null)
// INSERT OR IGNORE INTO cv_sexes VALUES ('M', 1, 'Male')
// INSERT OR IGNORE INTO cv_sexes VALUES ('F', 2, 'Female')
// INSERT OR IGNORE INTO cv_sexes VALUES ('U', 3, 'Unknown')
